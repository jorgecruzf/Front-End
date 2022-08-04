import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EpisodieService {

    SERVICE_URL_API = 'https://rickandmortyapi.com/api/episode';

    constructor(private router: Router, private http: HttpClient) { }

    getEpisodies() {

        let result =this.http.get<any>(this.SERVICE_URL_API)
        return result
    }

    getImgEpisodie(characters: string){
        console.log(characters, 'parameters');
        //let result = this.http.get<any>(characters)
        let result = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        return result
    }

}
