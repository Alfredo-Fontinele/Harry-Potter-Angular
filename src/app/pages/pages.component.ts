import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, RouterOutlet } from '@angular/router'
import { SharedModule } from '../shared/shared.module'

@Component({
  selector: 'pages',
  standalone: true,
  imports: [CommonModule, SharedModule, RouterOutlet, RouterLink],
  templateUrl: './pages.component.html',
})
export class PagesComponent {}
