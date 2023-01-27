import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  project:any;


  hideform=false;
    fname: any;
    lname: any;
    email: any;
    interestedtechnology: any;
    projecttopic: any;
    gender: any;
    Obj: any;
  
  ngOnInit(): void {
  }
  submit(){
  console.log(this.fname)
  console.log(this.lname)
  console.log(this.email)
  console.log(this.projecttopic)
  console.log(this.interestedtechnology)
  console.log(this.gender)
{
   const Obj={
     fname: this.fname,
     lname:this.lname,
     email:this.email,
     projecttopic:this.projecttopic,
     interestedtechnology:this.interestedtechnology,
     gender:this.gender
   }
  var requestOptions = {
    method: 'POST',
    body:JSON.stringify(Obj)
  };
  console.log(requestOptions);
  fetch("http://localhost:7000/employee/addemployee",{
    method:'POST',
    headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(Obj)
  })  .then(response => response.json())
  .then(result =>
    console.log(result))
  .catch(error => console.log('error',error));
    }

  window.location.href="./show"
  }

}

