import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { BannerComponent } from './components/views/banner/banner.component';
import { BoxservicesComponent } from './components/views/boxservices/boxservices.component';
import { PortifolioComponent } from './components/views/portifolio/portifolio.component';
import { PlansComponent } from './components/views/plans/plans.component';
import { BoxescontentComponent } from './components/views/boxescontent/boxescontent.component';
import { ModalComponent } from './components/templates/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    BoxservicesComponent,
    PortifolioComponent,
    PlansComponent,
    BoxescontentComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
