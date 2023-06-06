import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { SharedModule } from 'src/app/shared/shared.module'

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {}
