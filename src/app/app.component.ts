import { Component } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Comic, ComicBase } from './model/comic.model';
import { ComicsService } from './service/comics.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-web-avanzada';
  faSearch = faSearch;

  comics: ComicBase;
  filteredComics: Comic[];
  searchToken: string;

  constructor(private comicService: ComicsService) {}

  ngOnInit(): void {
    this.getComics();
  }

  async getComics() {
    try {
      this.comics = await this.comicService.getComics();
      this.filteredComics = this.comics.results;
      console.log(this.comics);
    } catch(error: any) {
      console.error(error.message);
    }
  }

  filterByVolumeName() {
    console.log(this.searchToken);
    if(this.searchToken) this.searchToken.toLowerCase().trim();
    this.filteredComics = this.comics.results.filter(comic => comic.volume.name.toLowerCase().includes(this.searchToken));
    if(this.searchToken == "") this.filteredComics = this.comics.results
  }
}
