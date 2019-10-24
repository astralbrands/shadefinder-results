import { Component } from '@angular/core';
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shadefinder-results';
  Arr = Array;
  M = Math;

  results = [
    {
      shadeName: 'DPG5',
      productName: '4-in-1 Love Your Selfie Foundation & Concealer',
      price: '$36.00',
      stars: 4.2,
      images: {
        thumbnail: 'image', 
        model: 'model',
        swatch: 'swatch'
      },
      suggestedShades: {
        light: {
          shadeName: 'DPG4',
          productName: '4-in-1 Love Your Selfie Foundation & Concealer',
          price: '$36.00',
          stars: 3,
          images: {
            thumbnail: 'image', 
            model: 'model',
            swatch: 'swatch'
          }
        },
        dark:{
          shadeName: 'DPG6',
          productName: '4-in-1 Love Your Selfie Foundation & Concealer',
          price: '$36.00',
          stars: 5,
          images: {
            main: '', 
            thumbnail: ''
          }
        }
      },
      addon: {
        image: 'image',
        label: 'Pair Perfectly With',
        name: 'BHOLDER Dual Action Complexion Applicator',
        price: '$28.00'
      }
    },
    {
      shadeName: 'DPG5',
      productName: '4-in-1 Love Your Selfie Foundation & Concealer',
      price: '$36.00',
      stars: 4.2,
      images: {
        thumbnail: 'image', 
        model: 'model',
        swatch: 'swatch'
      },
      suggestedShades: {
        light: {
          shadeName: 'DPG4',
          productName: '4-in-1 Love Your Selfie Foundation & Concealer',
          price: '$36.00',
          stars: 3,
          images: {
            thumbnail: 'image', 
            model: 'model',
            swatch: 'swatch'
          }
        },
        dark:{
          shadeName: 'DPG6',
          productName: '4-in-1 Love Your Selfie Foundation & Concealer',
          price: '$36.00',
          stars: 5,
          images: {
            main: '', 
            thumbnail: ''
          }
        }
      },
      addon: {
        image: 'image',
        label: 'Pair Perfectly With',
        name: 'BHOLDER Dual Action Complexion Applicator',
        price: '$28.00'
      }
    }
  ]


  selectShade(event){
    const shadeToSelect = jQuery(event.target).closest('.shade')[0]
    const selectedShade = jQuery(event.target).closest('.shades').find('.shade.selected')[0]
    jQuery(selectedShade).removeClass('selected');
    jQuery(shadeToSelect).addClass('selected');
    console.log('shadetoselect', shadeToSelect)
    console.log('selectedshade', selectedShade)
  }

}

