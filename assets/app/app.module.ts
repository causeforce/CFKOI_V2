// Angular Core Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

// Material Design and Animation Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMomentDateModule } from '@angular/material-moment-adapter';

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import {CdkTableModule} from '@angular/cdk/table';

import { MatSnackBar } from '@angular/material';

// Global Components
import { AppComponent } from "./app.component";
import { MessageComponent } from "./messages/message.component";
import { MessageListComponent } from "./messages/message-list.component";
import { MessageInputComponent } from "./messages/message-input.component";
import { MessagesComponent } from "./messages/messages.component";
import { AuthenticationComponent } from "./auth/authentication.component";
import { HeaderComponent } from "./header.component";

// Table Components
import { AllTablesComponent } from "./tables/alltables.component";
import { TorontoComponent } from "./toronto/toronto.component";
import { AlbertaComponent } from "./alberta/alberta.component";
import { MontrealComponent } from "./montreal/montreal.component";
import { VancouverComponent } from "./vancouver/vancouver.component";
import { PerthComponent } from "./perth/perth.component";
import { OWTorontoComponent } from "./ow-toronto/ow-toronto.component";
import { MelbourneComponent } from "./melbourne/melbourne.component";
import { BrisbaneComponent } from "./brisbane/brisbane.component";
import { FooterComponent } from "./footer/footer.component";


import { routing } from "./app.routing";
// Extra custom component libraries
import * as $ from 'jquery';

// Login/Logout/Signup Components
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";

// Services
import { AuthService } from "./auth/auth.service";
import { DataService } from "./data.service";


@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ]
})
export class AngularMaterialModule {}


@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        AllTablesComponent,
        TorontoComponent,
        AlbertaComponent,
        MontrealComponent,
        VancouverComponent,
        PerthComponent,
        OWTorontoComponent,
        MelbourneComponent,
        BrisbaneComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule,
        MatMomentDateModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AngularMaterialModule
    ],
    providers: [AuthService, DataService],
    bootstrap: [AppComponent]
})
export class AppModule {

}