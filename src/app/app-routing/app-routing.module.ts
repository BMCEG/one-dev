import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectsComponent } from '../client/projects/projects.component';
import { HomeComponent } from '../client/home/home.component';
import { AboutComponent } from '../client/about/about.component';
import { ContactUsComponent } from '../client/contact-us/contact-us.component';
import { ReserveUnitComponent } from '../client/reserve-unit/reserve-unit.component';
import { SuccessMsgComponent } from '../client/success-msg/success-msg.component';
import { ExplorePropertiesComponent } from '../client/explore-properties/explore-properties.component';
import { PortfolioComponent } from '../client/portfolio/portfolio.component';
import { PhotosComponent } from '../client/photos/photos.component';
import { PriceListComponent } from '../client/price-list/price-list.component';
import { CareersComponent } from '../client/careers/careers.component';
import { DevelopmentsCommercialComponent } from '../client/developments-commercial/developments-commercial.component';
import { InstitutesComponent } from '../client/institutes/institutes.component';
import { GovernmentComponent } from '../client/government/government.component';
import { Landing138Component } from '../client/landing-138-139b/landing.component';
import { LandingD124Component } from '../client/landing-D-124/landing.component';
import { LandingC273Component } from '../client/landing-C-273/landing.component';
import { LandingSuccess } from '../client/landing-success/landing.component';
import { LandingBeitComponent } from '../client/landing/beit/landing.component';
import { LandingNargesComponent } from '../client/landing/narges/landing.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'ONE', depth: 1 } },
  { path: 'projects', component: ProjectsComponent, data: { title: false, depth: 2 } },
  { path: 'about', component: AboutComponent, data: { title: false, depth: 3 } },
  { path: 'contact-us', component: ContactUsComponent, data: { title: false, depth: 4 } },
  { path: 'reserve-unit', component: ReserveUnitComponent, data: { title: false, depth: 5 } },
  { path: 'success-msg', component: SuccessMsgComponent, data: { title: false, depth: 6 } },
  { path: 'portfolio', component: PortfolioComponent, data: { title: false, depth: 8 } },
  { path: 'institutes', component: InstitutesComponent, data: { title: false, depth: 9 } },
  { path: 'photos', component: PhotosComponent, data: { title: false, depth: 10 } },
  { path: 'priceList', component: PriceListComponent, data: { title: false, depth: 11 } },
  { path: 'careers', component: CareersComponent, data: { title: false, depth: 12 } },
  { path: 'developments-commercial', component: DevelopmentsCommercialComponent, data: { title: false, depth: 13 } },
  { path: 'government', component: GovernmentComponent, data: { title: false, depth: 13 } },
  { path: 'landing/138-139B', component: Landing138Component, data: { title: false, depth: 14 } },
  { path: 'landing/D-124', component: LandingD124Component, data: { title: false, depth: 15 } },
  { path: 'landing/C-237', component: LandingC273Component, data: { title: false, depth: 16 } },
  { path: 'landing/success', component: LandingSuccess, data: { title: false, depth: 17 } },
  { path: 'landing/beit-el-watan', component: LandingBeitComponent, data: { title: false, depth: 18 } },
  { path: 'landing/narges', component: LandingNargesComponent, data: { title: false, depth: 19 } },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
