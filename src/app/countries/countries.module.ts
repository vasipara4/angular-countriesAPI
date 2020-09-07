import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from './country-list/country-list.component';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  declarations: [CountryListComponent],
  imports: [
    CommonModule,
    MatRadioModule
  ],
  exports: [CountryListComponent]
})
export class CountriesModule { }
