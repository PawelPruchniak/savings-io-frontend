import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonsService } from './services/commons.service';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
  providers: [CommonsService],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule)
      throw new Error('Core Module has already been loaded. Import Core Module in the App Module only.');
  }
}
