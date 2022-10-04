import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';
import { RouterModule, Routes } from '@angular/router';
import { CountByComponent } from './components/count-by/count-by.component';
import { StoreModule } from '@ngrx/store';
import { featureName, reducers } from './state';

const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
    children: [
      {
        path: 'by',
        component: CountByComponent,
      },
    ],
  },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(featureName, reducers),
  ],
  declarations: [
    CounterComponent,
    CountByComponent,
  ],
})
export class CounterModule {}
