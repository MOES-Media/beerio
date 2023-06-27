import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    { path: '', redirectTo: 'beer', pathMatch: "full" },
    {
        path: 'beer',
        loadChildren: () => import('./features/beer/beer.module').then(module => module.BeerModule)
    }
]