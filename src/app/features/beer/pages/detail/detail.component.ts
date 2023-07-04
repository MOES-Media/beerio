import { Component } from '@angular/core';
import { BeerFeatureState } from '../../store/states/beer.states';
import { Store } from '@ngrx/store';
import { FetchBeerDetailAction } from '../../store/actions/beer.actions';
import { ActivatedRoute } from '@angular/router';
import { Analytics } from 'aws-amplify';
import { Observable, Subscription } from 'rxjs';
import { BeerDetail } from '../../store/models/beer.model';
import { Constants } from 'src/app/core/constants';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  imageBaseUrl = Constants.BEER_LABELS_S3;
  isPending$: Observable<boolean>;
  beerDetail?: BeerDetail;
  subscriptions: Array<Subscription> = [];

  constructor(
    private store: Store<BeerFeatureState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('beerId')!;
    this.isPending$ = this.store.select(
      (store) => store.beerFeature.detail.isPending
    );
    this.store.dispatch(new FetchBeerDetailAction(id));
    Analytics.record({
      name: 'view-beer-detail',
      attributes: { id },
    });
    this.subscriptions.push(
      this.store
        .select((store) => store.beerFeature.detail.data)
        .subscribe((detail) => {
          console.log(detail)
          this.beerDetail = detail
        })
    );
  }

  ngOnDestroy() {
    this.subscriptions.forEach((sub) => sub.unsubscribe());
  }
}
