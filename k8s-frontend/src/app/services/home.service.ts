import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  http = inject(HttpClient)
  constructor() { }

  baseUrl = "http://localhost:8080"

  welcomePage(){
    return this.http.get(`${this.baseUrl}`);
  }

  postSearch(data: {message: string}){
    return this.http.post(`${this.baseUrl}/search`, data, {responseType: "text"});
  }

  postLucky(data: {message: string}){
    return this.http.post(`${this.baseUrl}/lucky`, data, {responseType: "text"});
  }
}

