import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClickGameComponent }  from './click-game/click-game.component';
import { ClickGame2Component }  from './click-game2/click-game2.component';
import { MenuComponent }  from './menu/menu.component';
import { LoginComponent }  from './login/login.component';
import { LadderComponent }  from './ladder/ladder.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'click-game', component: ClickGameComponent },
  { path: 'click-game2', component: ClickGame2Component },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ladder', component: LadderComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
