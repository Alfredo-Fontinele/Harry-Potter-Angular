import { Component } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ApiService, CharacterProps } from 'src/app/services/api.service'

@Component({
  selector: 'list-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent {
  characters: CharacterProps[] = []

  constructor(private apiService: ApiService) {
    this.findAll()
  }

  findAll() {
    this.apiService.findAll().subscribe({
      next: (characters) => {
        this.characters = characters
        console.log(characters)
      },
    })
  }
}
