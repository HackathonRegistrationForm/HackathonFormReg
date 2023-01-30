import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  project:any;


  hideform=false;
   submitted:any
    Obj: any;
  hacathon: any;

  
  ngOnInit(): void {
    this.hacathon = new FormGroup(
      {
        fname: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        lname : new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
        projecttopic : new FormControl('',[Validators.required]),
        email : new FormControl('',[Validators.required,Validators.email]),
        interestedtechnology:new FormControl('',[Validators.required]),
        gender : new FormControl('',[Validators.required]),
      sid:new FormControl(0)
      });
  }

    get f() { return this.hacathon.controls; }
    
    onSubmit() {
     
      if (this.hacathon.value.fname==''||this.hacathon.value.lname==''||this.hacathon.value.email==''||this.hacathon.value.projecttopic==''||this.hacathon.value.interestedtechnology==''||this.hacathon.value.gender=='') {
        Swal.fire(  
          'Cancelled',  
          'You Must  Enter All fields !',           //give for condition to take all properties take empty values
          'error'                                  //then take one alert message like not save all data
        )  
    }else
    {
      this.hacathon.value.sid = this.Obj;  
      Swal.fire('Added Successfully!', '', 'success').then(() => {
        window .location.href="/show"
      }); 
      var requestOptions = {
        method: 'POST',
        body:JSON.stringify(this.hacathon.value)
      };
      console.log(requestOptions);  
  fetch("http://localhost:7000/employee/addemployee",{
    method:'POST',
    headers:{
      "Access-Control-Allow-Origin":"*",
      "Content-Type":'application/json'
    },
    body:JSON.stringify(this.hacathon.value)
  })  .then(response => response.json())
  .then(result =>
    console.log(result))
  .catch(error => console.log('error',error));
    }
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.hacathon.value, null, 4));
  }
  onsubmit(){

  }
  get fname()
  {
   return this.hacathon.get('fname');
  }
  get lname()
  {
   return this.hacathon.get('lname') ;
  }
  get projecttopic()
  {
   return this.hacathon.get('projecttopic') ;
  }
  get interestedtechnology()
  {
   return this.hacathon.get('interestedtechnology') ;
  }
  get email()
  {
   return this.hacathon.get('email') ;
  }
  get gender()
  {
   return this.hacathon.get('gender') ;
  }
 
}

