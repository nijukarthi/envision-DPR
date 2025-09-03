import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AppFloatingConfigurator } from '../../../layout/component/app.floatingconfigurator';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { LoginService } from '../../../services/login/login.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-login',
  imports:[ButtonModule, CheckboxModule, InputTextModule, PasswordModule, 
    FormsModule, RouterModule, RippleModule,
  ReactiveFormsModule,FormsModule,CommonModule,ToastModule],/* AppFloatingConfigurator */
  providers: [MessageService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  checked: boolean = false;
  loginForm:any;
  validation: boolean = false;


  constructor(private fb: FormBuilder,private messageService: MessageService,
     private api:LoginService,private http:HttpClient,private router:Router){}

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: ['', Validators.required, Validators.email],
      password: ['', Validators.required]
    })
  }

  get lf() {
    return this.loginForm.controls;
  }

  login() {
    this.validation = true;
    console.log(this.loginForm.value);
    if (this.loginForm.invalid){
      this.messageService.add({ severity: 'error', summary: 'Error', detail: "Please Fill Details!", life: 3000 });
      return;
    }else{
      let data = {
         "userName" :this.loginForm.get('userName').value,
         "password" :this.loginForm.get('password').value
      }
      if(data.userName == 'siteengineer_user1' && data.password == "123456"){
        console.log(data);
        sessionStorage.setItem('user',data.userName);
        this.router.navigate(['/app/uikit/siteengineer'])
      }else{
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please Check Username & Password', life: 3000 });
      }


      /* this.api.login(data)
      .subscribe((res)=>{
        if(res.token){
          localStorage.setItem('Token',res.token);
          this.router.navigate(['/app/uikit/site-eng'])
          this.api.empDetails("")
          .subscribe((res)=>{
            console.log(res);
            
          },err=>{
            console.log(err);
            
          })
        }
      },err=>{
      this.messageService.add({ severity: 'error', summary: 'Error', detail: err.error.msg, life: 3000 });
      }) */
    }

}
}
