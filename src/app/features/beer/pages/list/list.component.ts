import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Constants } from 'src/app/core/constants';
import { BeerFeatureState } from '../../store/states/beer.states';
import { SetNextBeersPage } from '../../store/actions/beer.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  imageBaseUrl = Constants.BEER_LABELS_S3
  page$: Observable<number>;
  subscriptions: Array<Subscription> = []

  constructor(private store: Store<BeerFeatureState>) { }

  ngOnInit(): void {
    this.page$ = this.store.select((store) => store.beerFeature.currentPage)
    this.subscriptions.push(this.page$.subscribe((page) => console.log(page)))
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe())
  }

  onBeerItemClicked = (event: any) => console.log(event)

  onScroll = () => {
    console.log("hit the thing...")
    this.store.dispatch(new SetNextBeersPage())
  }

}
