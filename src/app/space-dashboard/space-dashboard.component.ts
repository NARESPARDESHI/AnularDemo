import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CarService } from 'src/app/Service/carservice';
@Component({
  selector: 'app-space-dashboard',
  templateUrl: './space-dashboard.component.html',
  styleUrls: ['./space-dashboard.component.css']
})
export class SpaceDashboardComponent implements OnInit {

  param1: string;
  RefreshTokenlink:string;
  constructor(private route: ActivatedRoute,private carService: CarService) { }

  ngOnInit() {
    ////this.param1 = this.route.snapshot.paramMap.get('code');
    //alert( this.param1);
   /// location.href = "http://localhost:4200/Space-Dashboard?code=fgfhgjhgfdvfbvfbgfhnmjm"
    this.route.queryParams.subscribe(params => {
      debugger
      console.log(params);
      this.param1 = params['code'];
      this.RefreshTokenlink='https://login.microsoftonline.com/{tenant}/oauth2/v2.0/token?client_id=6731de76-14a6-49ae-97bc-6eba6914391e&scope=https%3A%2F%2Fgraph.microsoft.com%2Fmail.read&code=' + this.param1 + '&redirect_uri=http%3A%2F%2Flocalhost%2Fmyapp%2F&grant_type=authorization_code&client_secret=JqQX2PNo9bpM0uEihUPzyrh'

      this.GetAccessTokenDetails(this.RefreshTokenlink);
  })
  }


 GetAccessTokenDetails(Authenticationlink){
    this.carService.GetAccessTokenDetails(Authenticationlink)
    .subscribe(resp => {
      if(resp)
      {
        console.log(resp)
        ///alert("success");
       /// this.router.navigate(['/Nav/ViewItemMaster']);
      }
               
    }
    ,error => {
      alert("error")
    } 
    );
  }

}
