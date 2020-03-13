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
import { BasicUserInfoDialogComponent } from './complete-profile/basic-user-info-dialog/basic-user-info-dialog.component';
// tslint:disable-next-line: max-line-length
import { SelectingJoysOptionsDialogComponent } from './complete-profile/selecting-joys-options-dialog/selecting-joys-options-dialog.component';

import { UserService } from './services/user.service';
import { FirestoreService } from './firebase-services/firestore.service';



@NgModule({
  declarations: [
    AppComponent,
    OverviewLandingPageComponent,
    LoginDialogComponent,
    SignUpDialogComponent,

    // complete-profile module
    PostSignupRedirectDialogComponent,
    BasicUserInfoDialogComponent,
    SelectingJoysOptionsDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    SignUpDialogComponent,

    // complete-profile module
    PostSignupRedirectDialogComponent,
    BasicUserInfoDialogComponent,
    SelectingJoysOptionsDialogComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),

    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireMessagingModule,
    AngularFireDatabaseModule,
    AngularFireFunctionsModule,

    // other
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,

    AppRoutingModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserService,
    FirestoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
