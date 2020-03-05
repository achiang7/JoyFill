import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireFunctionsModule } from '@angular/fire/functions';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { OverviewLandingPageComponent } from './landing-page/overview-landing-page/overview-landing-page.component';

import { MatDialogModule } from '@angular/material/dialog';
import { LoginDialogComponent } from './landing-page/login-dialog/login-dialog.component';
import { SignUpDialogComponent } from './landing-page/sign-up-dialog/sign-up-dialog.component';
import { PostSignupRedirectDialogComponent } from './complete-profile/post-signup-redirect-dialog/post-signup-redirect-dialog.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CompleteProfilePageModule } from './complete-profile/complete-profile.module';

@NgModule({
  declarations: [
    AppComponent,
    OverviewLandingPageComponent,
    LoginDialogComponent,
    SignUpDialogComponent,
    PostSignupRedirectDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    SignUpDialogComponent,
    PostSignupRedirectDialogComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),

    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,

    BrowserAnimationsModule,

    MatDialogModule,

    FormsModule,
    ReactiveFormsModule,

    CompleteProfilePageModule, 
    AppRoutingModule,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
