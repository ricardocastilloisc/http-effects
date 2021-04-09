import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import {HttpClientModule} from '@angular/common/http'


import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/app.reducers';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArrays } from './store/effects/index';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsuariosModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArrays),
    StoreDevtoolsModule.instrument({
      maxAge:25,
      logOnly: environment.production
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
