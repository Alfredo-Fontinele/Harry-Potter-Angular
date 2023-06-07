import { Component, Input } from '@angular/core'
import { CommonModule, NgOptimizedImage } from '@angular/common'
import { WizardProps } from 'src/app/services/api.service'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'card-wizard',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, RouterLink],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() currentWizard = {} as WizardProps
}
