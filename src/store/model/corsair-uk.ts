import {Store} from './store';

export const CorsairUK: Store = {
  currency: '£',
  labels: {
    inStock: {
      container: '#addToCartForm',
      text: ['add to cart'],
    },
    outOfStock: {
      container: '#addToCartForm',
      text: ['notify me when in stock'],
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.corsair.com/uk/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020181-UK',
    },

  ],
  name: 'corsair-uk',
};
