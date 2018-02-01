import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClickGameComponent } from './click-game/click-game.component';
import { AppRoutingModule } from './/app-routing.module';
import { ButtonsComponent } from './buttons/buttons.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { ClickGame2Component } from './click-game2/click-game2.component';
import { LoginComponent } from './login/login.component';
import { UsersService } from './users.service';
import { LadderComponent } from './ladder/ladder.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickGameComponent,
    ButtonsComponent,
    MenuComponent,
    ClickGame2Component,
    LoginComponent,
    LadderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
