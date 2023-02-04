import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  @Input() viewType: 
  'TabletPortrait' |
  'TabletLandscape' |
  'HandsetPortrait' |
  'HandsetLandscape' |
  undefined;
  
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,population,languages,flags,region,subregion';

  title = 'api-practice'
  countries: any;
  countriesBackup: any;
  selectedCountry: any | undefined;

  constructor(private http: HttpClient) {}
  
  ngOnInit() {
    this.initializeData();
  }

  initializeData() {
    this.http.get<any>(this.apiUrl).subscribe((data) => {
      if(data) {
        data.sort((a:any, b:any) => {
          if(a.name.common < b.name.common){
            return -1;
          } else if (a.name.common > b.name.common) {
            return 1;
          } else {
            return 0;
          }
        })
        this.countries = data;
        this.countriesBackup = data;
      }
    })
  }

  selectCountry(i: number) {    
    this.countries.find((country: any, index: number) => {
      if (index == i) this.selectedCountry = country;
    })
    this.parseLanguages(this.selectedCountry.languages);
  }

  parseLanguages(langObj: Object) {
    this.selectedCountry.languages = Object.values(langObj);
  }

  inputChange(e: string) {
    if (!e) return this.initializeData();

    this.countries = [...this.countriesBackup]
    this.countries = this.countries.filter((country: any) => {
      return (
        country.name.common.toLowerCase().includes(e.toLowerCase()) ||
        country.name.official?.toLowerCase().includes(e.toLowerCase())
      )
    })
  }
}
