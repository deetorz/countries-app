import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainPageComponent } from './components/main-page/main-page.component';
import { JoinPipe } from './join.pipe';
import { InputBoxComponent } from './components/shared/input-box/input-box.component';
import { ToolbarComponent } from './components/shared/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'


const materialModules = [
  MatToolbarModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    JoinPipe,
    InputBoxComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ...materialModules
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
