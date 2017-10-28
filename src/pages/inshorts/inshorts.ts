import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InshortsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inshorts',
  templateUrl: 'inshorts.html',
})
export class InshortsPage {

  config: Object = {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    spaceBetween: 0,
    slidesPerView: 1,
    direction: 'horizontal',
    parallax: false,
    freeMode: false,
    nested:true,
    roundLengths: true,
    effect: 'slide' ,//use cube,flip,coverflow or fade
    
  };

  appData: any[]=[
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_1.jpg",
      "color":"red"
    },
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_2.jpg",
      "color":"blue"
    },
    {
      "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg",
      "color":"green"
    },
    {
       "url":"https://amgs.000webhostapp.com/inshorts/img_4.jpg",
       "color":"black"
    }
  ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InshortsPage');
  }

}
