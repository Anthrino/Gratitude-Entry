import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {MatButtonModule, MatInputModule, MatFormFieldModule, MatCardModule} from '@angular/material';

import {AppComponent} from './app.component';
import {SubscriberService} from './subscriber.service';
import {FormsModule} from '@angular/forms';
import {HttpModule, JsonpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    JsonpModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule
  ],
  providers: [SubscriberService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
