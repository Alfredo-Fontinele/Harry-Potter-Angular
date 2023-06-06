import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable, tap } from 'rxjs'

interface WandProps {
  wood: string
  core: string
  length: number | null
}

export interface CharacterProps {
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

  findAll(): Observable<CharacterProps[]> {
    return this.http.get<CharacterProps[]>(`${this.baseUrl}/characters`)
  }
}
