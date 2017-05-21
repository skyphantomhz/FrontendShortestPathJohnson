import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { ColsComponent } from './cols/cols.component';
import { HomeComponent } from './home/home.component';
// import { RepoBrowserComponent } from './github/repo-browser/repo-browser.component';
// import { RepoListComponent } from './github/repo-list/repo-list.component';
// import { RepoDetailComponent } from './github/repo-detail/repo-detail.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { johnsonsAlgorithmService } from './_service/johnsonsAlgorithm.service';
// import { FloydWarshallService } from './_service/floydwarshall.service';
ColsComponent

@NgModule({
  declarations: [
    ColsComponent,
    AppComponent,
    // RepoBrowserComponent,
    // RepoListComponent,
    // RepoDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(rootRouterConfig, { useHash: true })
  ],
  providers: [
    johnsonsAlgorithmService,
    // FloydWarshallService,
     {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

}
