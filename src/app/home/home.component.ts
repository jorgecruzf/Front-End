import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodieService } from '../services/episodie/episodie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  episodies: Array<any> = new Array()
  episodie: Array<any> = new Array()
  imgEpisodie: Array<any> = new Array()

  constructor(private router: Router, private _serviceEpisodie: EpisodieService) {}

  ngOnInit(): void {
    this.getEpisodies();
  }

  getEpisodies() {
    this._serviceEpisodie.getEpisodies()
     .subscribe((episodes) => {
        this.episodies = episodes.results
        this.episodie = this.episodies
      }); 
  }

  getImgEpisodie(characters: string ){
      /* this._serviceEpisodie.getImgEpisodie(characters)
     .subscribe((result) => {
        this.imgEpisodie = result.image.toString()
      });
      return this.imgEpisodie */
     let result = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
     return result 
  }

  applyFilter(e: Event){
    let filterValue = (e.target as HTMLInputElement).value
    this.episodies = this.episodie.filter(x => x.name.trim().toLowerCase().toString().indexOf(filterValue.trim().toLowerCase()) > -1
                                                || x.episode.trim().toLowerCase().toString().indexOf(filterValue.trim().toLowerCase()) > -1)
  }

}
