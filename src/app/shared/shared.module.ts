import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HeaderComponent } from './header/header.component'
import { ListCardComponent } from './list-card/list-card.component'
import { CardComponent } from './card/card.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, HeaderComponent, ListCardComponent, CardComponent],
  exports: [HeaderComponent, ListCardComponent, CardComponent],
})
export class SharedModule {}
