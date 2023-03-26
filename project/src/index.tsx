import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from './components/app/app';
import { OFFERS } from './mocks/offers';
import { REVIEWS } from './mocks/reviews';
import {store} from './store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const Setting = {
  OfferClassName: 'cities',
  NearPlacesClassName: 'near-places'
} as const;

root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        offers = {OFFERS}
        offer = {OFFERS[1]}
        reviews = {REVIEWS}
        className = {Setting.OfferClassName}
        nearPlaceClassName = {Setting.NearPlacesClassName}
      />
    </Provider>
  </React.StrictMode>,
);
