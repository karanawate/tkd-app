import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../coach/data.service';

@Component({
  selector: 'app-coachinfo',
  templateUrl: './coachinfo.component.html',
  styleUrls: ['./coachinfo.component.css']
})
export class CoachinfoComponent implements OnInit {
  coach:{id:Number}
  constructor(private route:ActivatedRoute,private DataService:DataService) { }
  coachinfo: any = []
  ngOnInit() {
     const id =   this.coach = {
      id:this.route.snapshot.params['id']
    };
      this.DataService.onCoachInfo(id.id).subscribe(response =>{
        this.coachinfo = response;
      });
  }

}
