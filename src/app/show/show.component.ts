import { Component } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
Obj:any=[];
  pageOfItems: any;
  p: number = 1;
POSTS: any;
page: number = 1;
count: number = 0;                                       //Here we declare all properties what we have given
tableSize: number = 7;
tableSizes: any = [3, 6, 9, 12];
constructor(){
  this.Hideshowform()
}
onChangePage(pageOfItems: Array<any>) {          //Pagination Functionality
  this.pageOfItems = pageOfItems; 
}
submit(){
  window.location.href="./form"
}
Hideshowform()
{
  fetch("http://localhost:7000/employee/getemployee",{
    method:"GET",
    headers:{
      "access-Control-Allow-Origin":"*",
    },
    body:JSON.stringify(this.Hideshowform)
  })
  .then(response => response.json())
  .then(result =>{
    console.log(result),
    this.Obj = result.EmployeeInfo
  console.log(this.Obj)
  }
  ).catch(err =>
    console.log('error',err))
}
}
 

