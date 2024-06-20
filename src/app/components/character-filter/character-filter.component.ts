import { Component, EventEmitter, Output } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-character-filter',
  templateUrl: './character-filter.component.html',
  styleUrls: ['./character-filter.component.css']
})
export class CharacterFilterComponent {
  @Output() filterChanged = new EventEmitter<any>();

  films: any[] = [];
  species: any[] = [];
  selectedFilm: string = '';
  selectedSpecies: string = '';
  birthYearRange: { start: number | null, end: number | null } = { start: null, end: null };

  constructor(private swapiService: SwapiService) {
    this.swapiService.getFilms().subscribe((data: any) => this.films = data);
    this.swapiService.getSpecies().subscribe((data: any) => this.species = data);
  }

  applyFilter() {
    this.filterChanged.emit({
      film: this.selectedFilm,
      species: this.selectedSpecies,
      birthYearRange: this.birthYearRange
    });
  }
}
