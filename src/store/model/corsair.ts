import {Store} from './store';

export const Corsair: Store = {
  currency: '$',
  labels: {
    inStock: {
      container: '.add_to_cart_form',
      text: ['add to cart'],
    },
    maxPrice: {
      container: '.product-price',
      euroFormat: false,
    },
  },
  links: [
    {
      brand: 'test:brand',
      model: 'test:model',
      series: 'test:series',
      url:
        'https://www.corsair.com/us/en/Categories/Products/Power-Supply-Units/Power-Supply-Units-Advanced/SF-Series/p/CP-9020181-NA',
    },
  ],
  name: 'corsair',
};
