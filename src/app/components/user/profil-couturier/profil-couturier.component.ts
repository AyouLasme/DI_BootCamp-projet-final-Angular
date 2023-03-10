import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil-couturier',
  templateUrl: './profil-couturier.component.html',
  styleUrls: ['./profil-couturier.component.css']
})
export class ProfilCouturierComponent {

  url;
  uploadFile(event: any) {
    let image = event.target.files[0];
    console.log(image);

    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(this.url);
    }
  }

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      tout: false,
      homme: false,
      femme: false,
      enfant: false
    });
  }

  onChange() {
    if (this.form.value.homme && this.form.value.femme) {
      this.form.patchValue({
        tout: false
      });
    } else if (!this.form.value.homme && !this.form.value.femme && !this.form.value.enfant) {
      this.form.patchValue({
        tout: false
      });
    }
  }

  onChangeTout(event) {
    if (event.target.checked) {
      this.form.patchValue({
        homme: true,
        femme: true,
        enfant: true
      });
    } else {
      this.form.patchValue({
        homme: false,
        femme: false,
        enfant: false
      });
    }
  }


}
