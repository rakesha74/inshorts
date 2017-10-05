import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {

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
                    "url":"https://amgs.000webhostapp.com/inshorts/img_1.jpg"
                  },
                  {
                    "url":"https://amgs.000webhostapp.com/inshorts/img_2.jpg"
                  },
                  {
                    "url":"https://amgs.000webhostapp.com/inshorts/img_3.jpg"
                  },
                  {
                     "url":"https://amgs.000webhostapp.com/inshorts/img_4.jpg"
                  }
              ];


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
    
  }

}
