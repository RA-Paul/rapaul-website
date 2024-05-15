import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IonicModule } from '@ionic/angular';
import { SkillCardComponent } from './skill-card/skill-card.component';

@NgModule({
  declarations: [HeaderComponent, SideBarComponent, SkillCardComponent],
  imports: [CommonModule, IonicModule],
  exports: [HeaderComponent, SideBarComponent, SkillCardComponent],
})
export class ComponentsModule {}
