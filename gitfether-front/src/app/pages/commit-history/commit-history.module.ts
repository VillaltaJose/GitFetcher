import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommitHistoryComponent } from './commit-history.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [
		CommitHistoryComponent
	],
	imports: [
		CommonModule,
		RouterModule.forChild([{ path: '', component: CommitHistoryComponent }]),
	]
})
export class CommitHistoryModule { }
