import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SecondComponnentComponent } from './second-componnent/second-componnent.component';
import { FirstComponnentComponent } from './first-componnent/first-componnent.component';
import { JobDetailsResolver } from './job-details.resolver';
import { HttpClientModule } from '@angular/common/http';
import { AsdModule } from './test/asd/asd.module';

@NgModule({
  declarations: [
    AppComponent,
    SecondComponnentComponent,
    FirstComponnentComponent
  ],
  imports: [
    AppRoutingModule,
    AsdModule,
    HttpClientModule,
    BrowserModule.withServerTransition({appId: 'serverApp'})
  ],
  providers: [JobDetailsResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
