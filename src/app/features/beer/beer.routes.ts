import { Routes } from '@angular/router'
import { ListComponent } from './pages/list/list.component'
import { DetailComponent } from './pages/detail/detail.component'

export const beerRoutes: Routes = [
    {
        path: '',
        component: ListComponent
    },
    {
        path: ':beerId',
        component: DetailComponent
    }
]