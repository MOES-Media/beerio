import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Constants } from 'src/app/core/constants';
import { BeerFeatureState, BeerState } from '../../store/states/beer.states';
import {
  FetchBeerListAction,
  SetNextBeersPageAction,
} from '../../store/actions/beer.actions';
import { BeerOverviewItem } from '../../store/models/beer.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  imageBaseUrl = Constants.BEER_LABELS_S3;
  page$: Observable<number>;
  isPending$: Observable<boolean>;
  beerOverviewItems$: Observable<Array<BeerOverviewItem>>;
  subscriptions: Array<Subscription> = [];

  constructor(private store: Store<BeerFeatureState>, private router: Router) {}

  ngOnInit(): void {
    this.page$ = this.store.select((store) => store.beerFeature.overview.currentPage);
    this.isPending$ = this.store.select((store) => {
      console.log(store)
      return store.beerFeature.overview.isPending;});
    this.beerOverviewItems$ = this.store.select(
      (store) => store.beerFeature.overview.overviewItems
    );
    this.subscriptions.push(
      this.page$.subscribe((page) => {
        // TODO JN use page for analitics with amplify
        console.log(page);
        this.store.dispatch(new FetchBeerListAction());
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }

  onBeerItemClicked = (event: string) =>
    this.router.navigate([`/beer/${event}`]);

  onScroll = () => {
    this.store.dispatch(new SetNextBeersPageAction());
  };
}
