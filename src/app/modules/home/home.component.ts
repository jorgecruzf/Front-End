import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EpisodieService } from '../../services/episodie/episodie.service';

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

        this.episodie.map((el: any ) =>{
          this._serviceEpisodie.getImgEpisodie(el.characters[0])
          .subscribe((result) => {
              this.imgEpisodie = result.image.toString()
              console.log(this.imgEpisodie , 'this.imgEpisodie')
            });
        })
      }); 
  }

  applyFilter(e: Event){
    let filterValue = (e.target as HTMLInputElement).value
    this.episodies = this.episodie.filter(x => x.name.trim().toLowerCase().toString().indexOf(filterValue.trim().toLowerCase()) > -1
                                                || x.episode.trim().toLowerCase().toString().indexOf(filterValue.trim().toLowerCase()) > -1)
  }

}
