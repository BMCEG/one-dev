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
  { path: 'government', component: GovernmentComponent, data: { title: false, depth: 13 } }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
