import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { City } from 'src/app/models/city';
import { Competence } from 'src/app/models/comeptence';
import { Municipality } from 'src/app/models/municipality';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { CityService } from 'src/app/services/city.service';
import { MunicipalityService } from 'src/app/services/municipality.service';

@Component({
  selector: 'app-customer-edit-profile',
  templateUrl: './customer-edit-profile.component.html',
  styleUrls: ['./customer-edit-profile.component.css']
})
export class CustomerEditProfileComponent {
}
