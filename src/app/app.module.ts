import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchPokemonComponent } from './components/search-pokemon/search-pokemon.component';
import { CardPokemonComponent } from './components/card-pokemon/card-pokemon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MessageComponent } from './components/message/message.component';
import { CaughtPokemonsComponent } from './components/caught-pokemons/caught-pokemons.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchPokemonComponent,
    CardPokemonComponent,
    MessageComponent,
    CaughtPokemonsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
