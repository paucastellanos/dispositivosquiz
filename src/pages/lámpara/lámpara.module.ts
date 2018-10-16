import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LámparaPage } from './lámpara';

@NgModule({
  declarations: [
    LámparaPage,
  ],
  imports: [
    IonicPageModule.forChild(LámparaPage),
  ],
})
export class LámparaPageModule {}
