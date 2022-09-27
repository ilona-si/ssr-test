import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecondComponnentComponent } from './second-componnent/second-componnent.component';
import { FirstComponnentComponent } from './first-componnent/first-componnent.component';
import { JobDetailsResolver } from './job-details.resolver';
import { AsdModule } from './test/asd/asd.module';
import { VovaComponent } from './test/asd/vova/vova.component'; // CLI imports router

const routes: Routes = [
  {
    path: 'asd', component: VovaComponent,
  },
  {path: '**', component: SecondComponnentComponent},
];

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
