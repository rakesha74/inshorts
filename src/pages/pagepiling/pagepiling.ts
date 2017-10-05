import * as $ from 'jquery'
import { Component } from '@angular/core';


@Component({
    selector: 'pagepiling',
    templateUrl: 'pagepiling.html'
  })

  export class PagePiling {

    ngOnInit() {
        $(document).ready(function() {
            console.log("Rakesh");
            $('#pagepiling').pagepiling();
        });
    }
    
    
  }