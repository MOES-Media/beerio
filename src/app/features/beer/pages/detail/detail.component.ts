import { Component } from '@angular/core';
import { BeerFeatureState } from '../../store/states/beer.states';
import { Store } from '@ngrx/store';
import { FetchBeerDetailAction } from '../../store/actions/beer.actions';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  constructor(
    private store: Store<BeerFeatureState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.store.dispatch(
      new FetchBeerDetailAction(this.route.snapshot.paramMap.get('beerId')!)
    );
  }
}
