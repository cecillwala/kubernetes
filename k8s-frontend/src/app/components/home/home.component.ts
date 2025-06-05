import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  search = signal({message: ""});
  response = signal({message: ""})
  http = inject(HomeService);

  searchResponse(){
    this.http.postSearch(this.search()).subscribe((config) =>{
      this.response.set({message:`${config}`});
    })
  }

  luckyResponse(){
    this.http.postLucky(this.search()).subscribe((config) =>{
      this.response.set({message: `${config}`});
    })
  }

}
