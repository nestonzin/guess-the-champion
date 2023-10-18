import { Component } from '@angular/core';
import { ChampionService } from '../champion.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent {
  champions: any;
  championId: string | undefined;
  resposta: string | undefined;
  resultado: string | undefined;

  constructor(private championService: ChampionService) {}

  ngOnInit() {
    this.championService.getChampion().subscribe((champion) => {
      this.champions = champion;
      this.campeaoAleatorio();
    });
  }

  realizarGuess() {
    if (this.resposta && this.championId) {
      if (this.resposta.toLowerCase() === this.championId.toLowerCase()) {
        this.resultado = 'Acerto! A resposta está correta.';
        console.log(this.resultado);
      } else {
        this.resultado = 'Erro! A resposta está incorreta.';
        console.log(this.resultado);
      }
    }
  }

  campeaoAleatorio() {
    this.resultado = ''; 

    if (this.champions && this.champions.data) {
      const championKeys = Object.keys(this.champions.data);
      const randomIndex = Math.floor(Math.random() * championKeys.length);
      const randomChampionKey = championKeys[randomIndex];
      const randomChampion = this.champions.data[randomChampionKey];
      this.championId = randomChampion.id;
    }
  }
}
