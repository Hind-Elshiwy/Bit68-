import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataService {
  constructor(private http:HttpClient
  ) {
      
  }

  getData() {
    return this.http.get("https://5bcce576cf2e850013874767.mockapi.io/task/categories")
  }
}
