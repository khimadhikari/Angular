import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm: FormGroup;
  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.email, Validators.maxLength(20)]],
      skills: this.fb.group({
        skillName:  ['', [Validators.required, Validators.maxLength(10)]],
        experienceInYears:  ['', [Validators.required, Validators.maxLength(2)]],
        proficiency: ['', [Validators.required, Validators.maxLength(10)]],
      })
    });
  }

  submit() {
    console.log(this.employeeForm.value);
  }

  loadData() {
    this.employeeForm.setValue({
      fullName: 'Khim',
      email: 'Khim@hotmail.com',
      skills: {
        skillName: 'Angular' ,
        experienceInYears: 4 ,
        proficiency: 'Intermediate'
      }
    });
  }
}
