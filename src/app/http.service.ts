import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

 baseUrl:string='http://localhost:8080/con/'
  constructor(private http:HttpClient) { }

  getAllRecord(){
    return (this.http.get(`${this.baseUrl}allEmp`));
  }

  getRecordById(id:any){
   return (this.http.get(`${this.baseUrl}getEmpById/${id}`));
  }

  getAllCountry(){
    return (this.http.get(`${this.baseUrl}getall`));
  }

  PostRecord(obj:any){
     return (this.http.post(`${this.baseUrl}addEmployee`,obj,{
        responseType:'text'
      }));
  }

  updateRecord(obj:any){
   return (this.http.put(`${this.baseUrl}updateEmployee`,obj,{
      responseType:'text'
    }));
  }

  deleteData(id:any){
    return (this.http.delete(`${this.baseUrl}deleteEmployee/${id}`,{
      responseType:'text'
    }));
  }

}