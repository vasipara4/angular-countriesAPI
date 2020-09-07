import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { compareRegion } from '../country';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})
export class CountryListComponent implements OnInit {
  title = 'Rest API Countries';
  // countries: Country[];
  // sortedCountries: Country[];

  constructor(private countryService: CountryService) {}

  sortedCountries: Country[];
  countriesToShow: Country[];
  listRegion = [
    { name: 'All', ID: 'R1' },
    { name: 'Africa', ID: 'R2' },
    { name: 'Americas', ID: 'R3' },
    { name: 'Asia', ID: 'R4' },
    { name: 'Europe', ID: 'R5' },
    { name: 'Oceania', ID: 'R6' },
    { name: 'Others', ID: 'R9' },
  ];

  chooseCountries(selector: string) {
    if (selector === 'All') {
      this.countriesToShow = this.sortedCountries;
    } else if (selector !== 'Others') {
      this.countriesToShow = this.sortedCountries.filter(function (country) {
        return country.region === selector;
      });
    } else {
      this.countriesToShow = this.sortedCountries.filter(function (country) {
        return country.region === '';
      });
    }
  }

  ngOnInit(): void {
    this.countryService.getCountries().subscribe((countries) => {
      this.sortedCountries = countries.sort(compareRegion);
      this.countriesToShow = this.sortedCountries;
    });
  }
}
