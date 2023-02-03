import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'countries-app';
  viewType: 
  'TabletPortrait' |
  'TabletLandscape' |
  'HandsetPortrait' |
  'HandsetLandscape' |
  undefined;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit() {
    this.responsive
      .observe([
        Breakpoints.TabletPortrait,
        Breakpoints.TabletLandscape,
        Breakpoints.HandsetPortrait,
        Breakpoints.HandsetLandscape,
      ])
      .subscribe((result) => {
        const breakpoints = result.breakpoints;

        if (breakpoints[Breakpoints.TabletPortrait]) {
          console.log('screen matches TabletPortrait');
          this.viewType = 'TabletPortrait';          
        } else if (breakpoints[Breakpoints.TabletLandscape]) {
          console.log('screen matches TabletLandscape');
          this.viewType = 'TabletLandscape'; 
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          console.log('screen matches HandsetPortrait');
          this.viewType = 'HandsetPortrait'; 
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          console.log('screen matches HandsetLandscape');
          this.viewType = 'HandsetLandscape'; 
        }
      })
  }
}
