import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApiService, WizardProps } from 'src/app/services/api.service'
import { CardComponent } from '../card/card.component'

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  wizards: WizardProps[] = []

  constructor(private apiService: ApiService) {
    this.findAll()
  }

  findAll() {
    this.apiService.findAll().subscribe({
      next: (wizards) => ((this.wizards = wizards), console.log(wizards)),
    })
  }
}
