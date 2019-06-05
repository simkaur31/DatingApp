import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_Models/user';
import { UsersService } from 'src/app/services/users.service';
import { AlertifyService } from 'src/app/services/alertify.service';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';

@Component({
  selector: 'app-member-detailed',
  templateUrl: './member-detailed.component.html',
  styleUrls: ['./member-detailed.component.css']
})
export class MemberDetailedComponent implements OnInit {
  user: User;
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(private userService: UsersService, private alertify: AlertifyService,
     private routes: ActivatedRoute) { }

  ngOnInit() {
   this.routes.data.subscribe(data => {
     this.user = data['user'];
   });
   this.galleryOptions = [
     {
     width: '500px',
     height: '500px',
     imagePercent: 100,
     thumbnailsColumns: 4,
     imageAnimation : NgxGalleryAnimation.Slide,
     preview: false
     }
   ];

   this.galleryImages = this.getImages();
   }
   getImages() {
     const imageUrls = [];
     for (let i = 0; i < this.user.photos.length; i++) {
      imageUrls.push({
      small: this.user.photos[i].url,
      medium: this.user.photos[i].url,
      big: this.user.photos[i].url,
      description: this.user.photos[i].description
     });
     }
     return imageUrls;
   }

 /*  loadUser() {
    this.userService.getUser(+this.routes.snapshot.params['id']).subscribe((user: User) => {
      this.user = user;
    }, error => {
      this.alertify.error(error);
    });

    } */
  }

