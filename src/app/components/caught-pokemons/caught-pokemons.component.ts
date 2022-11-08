import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';

import { MessageService } from 'src/app/services/message.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-caught-pokemons',
  templateUrl: './caught-pokemons.component.html',
  styleUrls: ['./caught-pokemons.component.css']
})
export class CaughtPokemonsComponent implements OnInit {
  caughts: Pokemon[] = []

  constructor(private messageService: MessageService, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getCaughtPokemons().subscribe((items) => this.caughts = items)
  }

  delete(pokemon: Pokemon ):void {
    console.log(this.caughts)
  }
}
