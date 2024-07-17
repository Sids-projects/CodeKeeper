import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JavascriptComponent } from './javascript.component';
import { JsHomeComponent } from './screens/js-home/js-home.component';
import { JsIntroComponent } from './screens/js-intro/js-intro.component';
import { JsCommentsComponent } from './screens/js-comments/js-comments.component';
import { JsVariablesComponent } from './screens/js-variables/js-variables.component';
import { JsOperatorsComponent } from './screens/js-operators/js-operators.component';
import { JsTemplateliteralsComponent } from './screens/js-templateliterals/js-templateliterals.component';
import { JsTruthyfalsyComponent } from './screens/js-truthyfalsy/js-truthyfalsy.component';
import { JsBooleanComponent } from './screens/js-boolean/js-boolean.component';
import { JsStatementexpressionsComponent } from './screens/js-statementexpressions/js-statementexpressions.component';
import { JsArrayComponent } from './screens/js-array/js-array.component';
import { JsPromptComponent } from './screens/js-prompt/js-prompt.component';
import { JsIfelseComponent } from './screens/js-ifelse/js-ifelse.component';
import { JsSwitchComponent } from './screens/js-switch/js-switch.component';
import { JsFunctionsComponent } from './screens/js-functions/js-functions.component';
import { JsProject01Component } from './screens/js-project01/js-project01.component';
import { JsConversionComponent } from './screens/js-conversion/js-conversion.component';
import { JsAdvIntroComponent } from './screens/js-adv-intro/js-adv-intro.component';
import { JsObjectComponent } from './screens/js-object/js-object.component';
import { JsLoopComponent } from './screens/js-loop/js-loop.component';

const routes: Routes = [
  {
    path: 'jsComponent',
    component: JavascriptComponent,
    children: [
      { path: 'JsHomeRoute', component: JsHomeComponent },
      { path: 'JsIntroRoute', component: JsIntroComponent },
      { path: 'JsCommentsRoute', component: JsCommentsComponent },
      { path: 'JsVariablesRoute', component: JsVariablesComponent },
      { path: 'JsOperatorsRoute', component: JsOperatorsComponent },
      { path: 'JsTliteralsRoute', component: JsTemplateliteralsComponent },
      { path: 'JsConversionRoute', component: JsConversionComponent },
      { path: 'JsTruthyfalsyRoute', component: JsTruthyfalsyComponent },
      { path: 'JsBooleanRoute', component: JsBooleanComponent },
      { path: 'JsStatExpRoute', component: JsStatementexpressionsComponent },
      { path: 'JsArrayRoute', component: JsArrayComponent },
      { path: 'JsPromptRoute', component: JsPromptComponent },
      { path: 'JsIfelseRoute', component: JsIfelseComponent },
      { path: 'JsSwitchRoute', component: JsSwitchComponent },
      { path: 'JsFunctionsRoute', component: JsFunctionsComponent },
      { path: 'JsObjectRoute', component: JsObjectComponent },
      { path: 'JsLoopRoute', component: JsLoopComponent },
      { path: 'JsProject01Route', component: JsProject01Component },
      { path: 'JsAdvIntroRoute', component: JsAdvIntroComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jsRoutingModule {}
