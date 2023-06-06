import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { CardComponent } from './card/card.component'
import { HeaderComponent } from './header/header.component'
import { ListCardComponent } from './list-card/list-card.component'

@NgModule({
  declarations: [],
  imports: [CommonModule, CardComponent, HeaderComponent, ListCardComponent],
  exports: [CardComponent, HeaderComponent, ListCardComponent],
})
export class SharedModule {}
