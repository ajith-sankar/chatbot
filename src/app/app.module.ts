import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChatModule } from './chat/chat.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
