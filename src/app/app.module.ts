import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorPageComponent } from '@core/error-page/error-page.component';
import { HeaderModule } from '@core/header/header.module';
import { StoreModule } from '@ngrx/store';
import { CategoriesHttpService } from 'src/app/services/categories-http.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { userReducer } from './redux/user/user.reducers';
import { CheckAuthService } from './services/check-auth.service';
import { UserHttpService } from './services/user-http.service';

@NgModule({
  declarations: [AppComponent, ErrorPageComponent, FooterComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    HeaderModule, 
    HttpClientModule,
    StoreModule.forRoot({user: userReducer})
  ],
  providers: [CategoriesHttpService, UserHttpService, CheckAuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
