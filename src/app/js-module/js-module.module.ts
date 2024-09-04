import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { jsRoutingModule } from './jsRouterModule';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { JavascriptComponent } from './javascript.component';
import { JsHomeComponent } from './screens/js-home/js-home.component';
import { JsIntroComponent } from './screens/js-intro/js-intro.component';
import { JsCommentsComponent } from './screens/js-comments/js-comments.component';
import { JsVariablesComponent } from './screens/js-variables/js-variables.component';
import { JsOperatorsComponent } from './screens/js-operators/js-operators.component';
import { JsTemplateliteralsComponent } from './screens/js-templateliterals/js-templateliterals.component';
import { JsConversionComponent } from './screens/js-conversion/js-conversion.component';
import { JsTruthyfalsyComponent } from './screens/js-truthyfalsy/js-truthyfalsy.component';
import { JsBooleanComponent } from './screens/js-boolean/js-boolean.component';
import { JsStatementexpressionsComponent } from './screens/js-statementexpressions/js-statementexpressions.component';
import { JsArrayComponent } from './screens/js-array/js-array.component';
import { JsPromptComponent } from './screens/js-prompt/js-prompt.component';
import { JsIfelseComponent } from './screens/js-ifelse/js-ifelse.component';
import { JsSwitchComponent } from './screens/js-switch/js-switch.component';
import { JsFunctionsComponent } from './screens/js-functions/js-functions.component';
import { JsProject01Component } from './screens/js-project01/js-project01.component';
import { JsCodeComponent } from './screens/js-code/js-code.component';
import { JsAdvIntroComponent } from './screens/js-adv-intro/js-adv-intro.component';
import { JsObjectComponent } from './screens/js-object/js-object.component';
import { JsLoopComponent } from './screens/js-loop/js-loop.component';
import { JsAdvThisComponent } from './screens/js-adv-this/js-adv-this.component';

@NgModule({
  declarations: [
    JavascriptComponent,
    JsHomeComponent,
    JsIntroComponent,
    JsCommentsComponent,
    JsVariablesComponent,
    JsOperatorsComponent,
    JsTemplateliteralsComponent,
    JsConversionComponent,
    JsTruthyfalsyComponent,
    JsBooleanComponent,
    JsStatementexpressionsComponent,
    JsArrayComponent,
    JsPromptComponent,
    JsIfelseComponent,
    JsSwitchComponent,
    JsFunctionsComponent,
    JsProject01Component,
    JsCodeComponent,
    JsAdvIntroComponent,
    JsObjectComponent,
    JsLoopComponent,
    JsAdvThisComponent,
  ],
  imports: [CommonModule, jsRoutingModule, MatSlideToggleModule],
})
export class JsModuleModule {}
