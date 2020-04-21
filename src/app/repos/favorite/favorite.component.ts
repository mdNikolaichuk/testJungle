import { Repo } from './../repos.model';
import { Component, OnInit } from '@angular/core';
import { ReposService } from 'src/app/service/repos.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  reposList: Repo[]
  key: object[]

  constructor() { }

  ngOnInit() {
    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    this.reposList = values 
  }

}
