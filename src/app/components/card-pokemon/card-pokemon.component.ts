import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/Pokemon';

import { MessageService } from 'src/app/services/message.service';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card-pokemon',
  templateUrl: './card-pokemon.component.html',
  styleUrls: ['./card-pokemon.component.css']
})
export class CardPokemonComponent implements OnInit {
  @Input() searchPokemon:Pokemon[] = []
  @Input() allPokemons:Pokemon[] = []
  @Input() caught: Pokemon[] = []

  constructor(private messageService: MessageService, private pokemonService: PokemonService) { }

  ngOnInit(): void {

  }
  catch(pokemon: Pokemon ):void {
    this.pokemonService.postCaught(pokemon)
    .subscribe(pokemon => this.caught.push(pokemon) && this.messageService.add(pokemon.message))
    
  }
}
