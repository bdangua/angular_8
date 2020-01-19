import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { indexComponent } from './index.component';
import { pageOneComponent } from './pageone.component';
import { lazyConst } from './app.routes';
import { authGuard } from './auth.guard';
@NgModule({
  declarations: [
    AppComponent,indexComponent,pageOneComponent
  ],
  imports: [
    BrowserModule,lazyConst
  ],
  providers: [authGuard],
  bootstrap: [indexComponent]
})
export class AppModule { }
