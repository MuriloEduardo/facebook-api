import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      titulo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mensagem: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      console.log('Submit com sucesso!', this.form.value);
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field).errors;
  }

}
