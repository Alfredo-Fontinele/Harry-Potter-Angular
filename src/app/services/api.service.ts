import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, map, tap } from 'rxjs'

interface WandProps {
  wood: string
  core: string
  length: number | null
}

export interface WizardProps {
  id: string
  name: string
  alternate_names: string[]
  species: string
  gender: string
  house: string
  dateOfBirth: string
  yearOfBirth: number
  wizard: boolean
  ancestry: string
  eyeColour: string
  hairColour: string
  wand: WandProps
  patronus: string
  hogwartsStudent: boolean
  hogwartsStaff: boolean
  actor: string
  alternate_actors: string[]
  alive: boolean
  image: string
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'https://hp-api.onrender.com/api'

  constructor(private http: HttpClient) {}

  findAll(): Observable<WizardProps[]> {
    return this.http
      .get<WizardProps[]>(`${this.baseUrl}/characters`)
      .pipe(
        map((wizards) =>
          wizards.filter((wizard) => wizard.image && wizard.house)
        )
      )
  }

  findOne(id: string): Observable<WizardProps[]> {
    return this.http
      .get<WizardProps[]>(`${this.baseUrl}/character/${id}`)
      .pipe(tap((res) => res.map((res) => res)))
  }
}
