import { Component } from '@angular/core';


@Component({
  selector: 'nz-demo-upload-picture-card',
  templateUrl: './customer-demand.component.html',
  styleUrls: ['./customer-demand.component.css'],
})
export class CustomerDemandComponent {
  url;
  uploadFile(event:any) {
    let image = event.target.files[0];
    console.log(image);

    var reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onload = (_event) => {
      this.url = reader.result;
      console.log(this.url);
    }
  }
  
}
