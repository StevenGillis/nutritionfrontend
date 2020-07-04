import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css'],
  providers: [PhotoService]
})
export class PhotosComponent implements OnInit {

  constructor(private photoService:PhotoService) { }

  photoList = null;
  photoUrl = '';

  ngOnInit() {
    this.updatePhotoList();
    this.photoUrl = this.photoService.photoUrl;
  }
  updatePhotoList():void{
    this.photoService.listPhotos().subscribe((photos)=>{
      this.photoList = photos;
      this.putServerURL(this.photoList);
    });
  }
  putServerURL(photoList):void{
    photoList.forEach(element => {
      console.log(photoList);
      element.imageurl = this.photoUrl + element.imageurl;
    });
  }

}
