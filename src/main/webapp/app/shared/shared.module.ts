import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  JhipsterRabbitmqExampleSharedLibsModule,
  JhipsterRabbitmqExampleSharedCommonModule,
  JhiLoginModalComponent,
  HasAnyAuthorityDirective
} from './';

@NgModule({
  imports: [JhipsterRabbitmqExampleSharedLibsModule, JhipsterRabbitmqExampleSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [JhipsterRabbitmqExampleSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterRabbitmqExampleSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterRabbitmqExampleSharedModule
    };
  }
}
