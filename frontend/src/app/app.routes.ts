import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { App } from './app';
import { NotFound } from './pages/not-found/not-found';
import { AuthPage } from './pages/auth-page/auth-page';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "login",
        pathMatch: "full"
    },
    {
        path: "login",
        component: AuthPage
    },
    {
        path: "register",
        component: AuthPage
    },
    {
        path: "**",
        component: NotFound
    }
];
