import { Component, ElementRef, OnInit, } from '@angular/core';
import { Coach } from './coach.model';
import { DataService } from './data.service';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css']
})
export class CoachComponent implements OnInit {

  data: any = [];
  coach = new Coach();
  editMode:boolean = false;
  editindex: number


 constructor(private DataService:DataService) { }
 collection : any = [];
  ngOnInit() {
    this.DataService.getCoach_data().subscribe((response) => {
      console.log(response)
      this.data = response

    })
  }

  inserted_coach()
  {
      if(this.editMode)
      {
       //if edit
       //console.log(this.data[this.editindex]);
       console.log(this.coach);
       this.DataService.onUpdateCoach(this.coach.id,this.coach ).subscribe(res =>{
          console.log(res);
       })
      }
      else{
        this.DataService.insertData(this.coach).subscribe(res => {
          console.log(res);
        })
      }

  }

  coachdelete(coach){
    this.collection.splice(coach-1, 1);
    this.DataService.delete_coach(coach).subscribe((result) =>{
    });
  }
    coachedit(index: number){
      this.editMode = true;
      this.editindex = index;
        const row = this.data[index]
        console.log(this.data[index])
        this.coach.id = row.id
        this.coach.age = row.age
        this.coach.name = row.name
        this.coach.address = row.address
        this.coach.Belt = row.Belt

      }


}
