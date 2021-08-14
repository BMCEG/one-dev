import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LightboxModule } from 'ngx-lightbox';

import { AppComponent } from './app.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { ProjectsComponent } from './client/projects/projects.component';
import { ReserveUnitComponent } from './client/reserve-unit/reserve-unit.component';
import { SuccessMsgComponent } from './client/success-msg/success-msg.component';
import { FormsModule }   from '@angular/forms';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Globals} from './app.config';
import {GlobalsFunction} from './app.template.config';
import { ExplorePropertiesComponent } from './client/explore-properties/explore-properties.component';
import { PortfolioComponent } from './client/portfolio/portfolio.component';
import { PhotosComponent } from './client/photos/photos.component';
import { VideosComponent } from './client/videos/videos.component';
import { PriceListComponent } from './client/price-list/price-list.component';
import { CareersComponent } from './client/careers/careers.component';
import { DevelopmentsCommercialComponent } from './client/developments-commercial/developments-commercial.component';
import { InstitutesComponent } from './client/institutes/institutes.component';
import { GovernmentComponent } from './client/government/government.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactUsComponent,
    HeaderComponent,
    FooterComponent,
    ProjectsComponent,
    ReserveUnitComponent,
    SuccessMsgComponent,
    ExplorePropertiesComponent,
    PortfolioComponent,
    PhotosComponent,
    VideosComponent,
    PriceListComponent,
    CareersComponent,
    DevelopmentsCommercialComponent,
    InstitutesComponent,
    GovernmentComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    CarouselModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    LightboxModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [
    Globals,
    GlobalsFunction,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}