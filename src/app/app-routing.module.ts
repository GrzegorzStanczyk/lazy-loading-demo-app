import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeModule } from './home/home.module';
import { UnauthorizedComponent } from './unauthorized.component';
import { AuthGuard } from './auth-guard.service';
import { AppCustomPreloader } from './app-routing-loader';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'clients', loadChildren: 'app/client/client.module#ClientModule', canLoad: [AuthGuard] },
    { path: 'users', loadChildren: 'app/user/user.module#UserModule', data: {preload: true} },
    { path: 'unauthorized', component: UnauthorizedComponent},
    { path: '**', redirectTo: 'home' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes), HomeModule],
    exports: [RouterModule],
    providers: [AuthGuard, AppCustomPreloader]
})
export class AppRoutingModule { }
