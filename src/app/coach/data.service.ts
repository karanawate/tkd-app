import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) { }

  getCoach_data(){
    return this.httpClient.get('http://localhost/angularApiPhp/select.php')
  }

  insertData(data)
  {
    return this.httpClient.post('http://localhost/angularApiPhp/insert.php', data)
  }

  delete_coach(id){
    return this.httpClient.delete('http://localhost/angularApiPhp/delete.php?id='+id)
  }
  onUpdateCoach(id, data){
    return this.httpClient.put('http://localhost/angularApiPhp/update.php?id='+id, data)
  }


}
