import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{ MenuPage }from '../pages/menu/menu';
import { PresentPage } from '../pages/present/present';
import { PastPage } from '../pages/past/past';
import { FuturePage } from '../pages/future/future';
import { PresentindPage } from '../pages/presentind/presentind';
import { PresentcontiPage } from '../pages/presentconti/presentconti';
import { PresentperfPage } from '../pages/presentperf/presentperf';
import {PresentprfcontiPage } from '../pages/presentprfconti/presentprfconti';
import { PastindPage } from '../pages/pastind/pastind';
import { PastcontiPage } from '../pages/pastconti/pastconti';
import { PastprfPage } from '../pages/pastprf/pastprf';
import { PastprfcontiPage } from '../pages/pastprfconti/pastprfconti';
import { FutureindPage } from '../pages/futureind/futureind';
import { FuturecontiPage } from '../pages/futureconti/futureconti';
import {FutureprfPage } from '../pages/futureprf/futureprf';
import {FutureprfcontiPage } from '../pages/futureprfconti/futureprfconti';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
	MenuPage,
PresentPage,
	PastPage,
	 FuturePage,
	 PastindPage,
	 PresentcontiPage,
	 PresentperfPage,
	 PresentprfcontiPage,
	 PastindPage,
	 PastcontiPage,
	 PastprfPage,
	 PastprfcontiPage,
	 FutureindPage,
	 FuturecontiPage,
	 FutureprfPage,
	 FutureprfcontiPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	MenuPage,
	PresentPage,
	PastPage,
	 FuturePage,
	 PastindPage,
	 PresentcontiPage,
	 PresentperfPage,
	 PresentprfcontiPage,
	 PastindPage,
	 PastcontiPage,
	 PastprfPage,
	 PastprfcontiPage,
	 FutureindPage,
	 FuturecontiPage,
	 FutureprfPage,
	 FutureprfcontiPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
