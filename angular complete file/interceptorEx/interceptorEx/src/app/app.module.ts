import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InterceptorComponent } from './components/interceptor.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { authFilter } from './auth/auth.filter';
@NgModule({
  declarations: [
    AppComponent,
    InterceptorComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:authFilter,
    multi:true
  }],
  bootstrap: [InterceptorComponent]
})
export class AppModule { }
