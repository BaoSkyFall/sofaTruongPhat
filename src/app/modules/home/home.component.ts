import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  owlOption: OwlOptions = {
    autoplay: false,
    autoplaySpeed: 2000,
    nav: false,
    dots: false,
    loop: true,
    navSpeed: 1000,
    // navText: ['<i class="fa fa-angle-left slick-arrow"></i>', '<i class="fa fa-angle-right slick-arrow"></i>'],

    items: 1
  }
  ngOnInit(): void {
  }

}
