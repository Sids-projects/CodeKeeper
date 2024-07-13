import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'jsComponent/JsIntroRoute',
    pathMatch: 'full',
  },
  {
    path: 'cssModule',
    loadChildren: () =>
      import('./css-module/css-module.module').then((m) => m.CssModuleModule),
  },
  {
    path: 'jsModule',
    loadChildren: () =>
      import('./js-module/js-module.module').then((m) => m.JsModuleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppRoutingModule {}
