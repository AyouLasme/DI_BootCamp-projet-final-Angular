import { Component } from '@angular/core';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent {
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
