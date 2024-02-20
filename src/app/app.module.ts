import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ChooseColorComponent } from './components/choose-color/choose-color.component';
import { CompositionComponent } from './components/composition/composition.component';
import { CaseComponent } from './components/case/case.component';
import { AudioComponent } from './components/audio/audio.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    ChooseColorComponent,
    CompositionComponent,
    CaseComponent,
    AudioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
