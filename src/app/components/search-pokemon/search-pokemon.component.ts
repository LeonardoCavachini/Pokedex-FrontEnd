import { Component, OnInit } from '@angular/core';

import { Pokemon } from 'src/app/Pokemon';

import { environment } from 'src/environments/environment';

import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit {

  allPokemons: Pokemon[] = []

  pokemon: Pokemon[] = []

  baseApiUrl = environment.baseApiUrl



  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemons().subscribe((items) => this.allPokemons = items)
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement
    const value = target.value

    this.pokemon = this.allPokemons.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(value)
    })
  }

}
