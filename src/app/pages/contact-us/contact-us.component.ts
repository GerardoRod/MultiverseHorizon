import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    name:['',Validators.required],
    lastname:['', Validators.required],
    email: ['', [Validators.required, Validators.email] ],
    description: ['', Validators.required],
  });
  
  

  send(){
    if( this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return;
    }
    console.log(this.myForm.value);
    this.myForm.reset();
    
  }

  fieldIsValid( field: string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched;
  }

  getErrorMessage(field: string) {
    if (this.myForm.controls[field].hasError('required')) {
      return 'You must enter a value';
    }
    return this.myForm.controls[field].hasError('email') ? 'Not a valid email' : '';
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    
    
  }

}
