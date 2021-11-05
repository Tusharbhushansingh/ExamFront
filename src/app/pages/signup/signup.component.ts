import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/services/user.service';
import swal from 'sweetalert2'
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

 

  constructor( private userService: UserService, 
    private snack:MatSnackBar,
    private fb: FormBuilder
    ) { }


  public user={
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  ngOnInit(): void {
  }
  formSubmit(){
    if(this.user.username == '' || this.user.username == null){
      // alert('username must required !!');
      this.snack.open("Username is required",'',{
        duration:1000
      });
      return;

    }

    //adduser
    this.userService.addUser(this.user).subscribe(
      (data:any)=>{
        console.log(data);
        swal.fire('success done', 'Username '+ data.username, 'success');
      },
      (error)=>{
        console.log(error);
        alert('something went wrong!');
      }
    );
  }

}
