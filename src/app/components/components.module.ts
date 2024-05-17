import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { IonicModule } from '@ionic/angular';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ArticleCardComponent } from './article-card/article-card.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    SkillCardComponent,
    ArticleCardComponent,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    HeaderComponent,
    SideBarComponent,
    SkillCardComponent,
    ArticleCardComponent,
  ],
})
export class ComponentsModule {}
