import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsComponent } from './songs.component';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';

const routes: Routes = [
  {
    path: '',
    component: SongsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'new',
        component: EntryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    SongsComponent,
    ListComponent,
    EntryComponent,
  ],
})
export class SongsModule {}
