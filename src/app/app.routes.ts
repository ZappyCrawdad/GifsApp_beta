import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent:() => 
            import('./gifs/pages/dashboard-pages/dashboard-pages.component'),
        children: [

    {
        path: 'background',
        loadComponent:() => 
            import('./gifs/pages/Background-page/Background-page.component'),
    },    
    {
        path: 'trending',
        loadComponent:() => 
            import('./gifs/pages/trending-page/trending-page.component'),
    },
    {
        path: 'search',
        loadComponent:() => 
            import('./gifs/pages/search-page/search-page.component'),
    },
    {
        path: '**',
        redirectTo: 'background'
    },
        ]
    },
    
    {
        path: '**',
        redirectTo: 'dashboard',
    },
];
