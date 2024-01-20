import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sprint } from '../Models/sprint';

@Injectable({
  providedIn: 'any'
})
export class SprintsService {
  url:string="https://mani-api.ma/api/Sprints";
  constructor(private http:HttpClient) { }
  getAll():Observable<Sprint[]>
  {
    return this.http.get<Sprint[]>(this.url);
  }
  getById(id:number):Observable<Sprint>
  {
    return this.http.get<Sprint>(this.url +"/" + id);
  }
  add(Sprint:Sprint)
  {
    return this.http.post(this.url,Sprint);
  }
  update(Sprint:Sprint)
  {
    return this.http.put(this.url+"/"+Sprint.Id,Sprint);
  }
  remove(id:number)
  {
    return this.http.delete(this.url+ "/"+id);
  }
}
