import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ChampionService {
  constructor(private http: HttpClient) {}

  getChampion() {
    const apiUrl =
      'https://ddragon.leagueoflegends.com/cdn/11.19.1/data/en_US/champion.json';

    return this.http.get(apiUrl);
  }
}
