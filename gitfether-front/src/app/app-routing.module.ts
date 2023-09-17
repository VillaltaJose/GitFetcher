import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{ path: 'commits', loadChildren: () => import('./pages/commit-history/commit-history.module').then(m => m.CommitHistoryModule) },
	{ path: '', redirectTo: '/commits', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
