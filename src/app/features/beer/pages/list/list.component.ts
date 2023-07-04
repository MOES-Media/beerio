import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, map, takeUntil } from 'rxjs';
import { Constants } from 'src/app/core/constants';
import { BeerFeatureState, BeerState } from '../../store/states/beer.states';
import {
  FetchBeerListAction,
  SetNextBeersPageAction,
} from '../../store/actions/beer.actions';
import { BeerOverviewItem } from '../../store/models/beer.model';
import { Router } from '@angular/router';
import { Analytics } from 'aws-amplify';
import {
  isBeerOverviewPending,
  selectBeerOverviewItems,
  selectCurrentPage,
} from '../../store/selectors/beer-overview.selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  private destroy$ = new Subject<void>();
  imageBaseUrl = Constants.BEER_LABELS_S3;
  isPending$: Observable<boolean>;
  beerOverviewItems$: Observable<Array<BeerOverviewItem>>;

  constructor(private store: Store<BeerFeatureState>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select(selectCurrentPage)
      .pipe(
        takeUntil(this.destroy$),
        map((page) => {
          Analytics.record({
            name: 'beer-overview-next-page',
            attributes: { page: page.toString() },
          });
          this.store.dispatch(new FetchBeerListAction());
        })
      )
      .subscribe();
    this.isPending$ = this.store.select(isBeerOverviewPending);
    this.beerOverviewItems$ = this.store.select(selectBeerOverviewItems);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onBeerItemClicked = (event: string) =>
    this.router.navigate([`/beer/${event}`]);

  onScroll = () => {
    this.store.dispatch(new SetNextBeersPageAction());
  };
}
