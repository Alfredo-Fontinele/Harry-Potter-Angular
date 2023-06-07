import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from '../../shared/shared.module'
import { ActivatedRoute, RouterLink } from '@angular/router'
import { ApiService, WizardProps } from '../../services/api.service'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
  currentWizardDetails = {} as WizardProps

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.getWizard()
  }

  getWizard() {
    const id = this.activatedRoute.snapshot.params['id']
    this.apiService.findOne(id).subscribe({
      next: (res) => {
        this.currentWizardDetails = res.shift() as WizardProps
        console.log(this.currentWizardDetails)
      },
    })
  }
}
