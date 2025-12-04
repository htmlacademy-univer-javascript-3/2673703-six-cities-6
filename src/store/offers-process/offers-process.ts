import {OffersProcessInitial} from './offers-process.t.ts';
import {getCities} from '../../mocks/cities.ts';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace} from '../../const.ts';
import {CityProps} from '../../types/city.ts';
import {fetchComments, fetchNearby, fetchOffer, fetchOffers, sendComment} from '../api-actions.ts';
import {CitiesCardProps} from '../../types/cities-card.ts';
import {OfferProps} from '../../types/offer.ts';
import {CommentProps} from '../../types/comment.ts';


const initialState: OffersProcessInitial = {
  city: getCities().find((city) => city.name === 'Paris')!,
  offers: [],
  current: {
    offer: null,
    comments: [],
    nearby: [],
  },
};

export const offerProcess = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    changeCity(state, action: PayloadAction<CityProps>) {
      state.city = action.payload;
    },
    fillOffers(state, action: PayloadAction<CitiesCardProps[]>) {
      state.offers = action.payload;
    },
    fillNearby(state, action: PayloadAction<CitiesCardProps[]>) {
      state.current.nearby = action.payload;
    },
    fillComments(state, action: PayloadAction<CommentProps[]>){
      state.current.comments = action.payload;
    },
    loadCurrentOffer(state, action: PayloadAction<OfferProps | null>) {
      state.current.offer = action.payload;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.current.offer = action.payload;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.current.offer = null;
        state.current.comments = [];
        state.current.nearby = [];
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.current.comments = action.payload;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.current.comments.push(action.payload);
      })
      .addCase(fetchNearby.fulfilled, (state, action) => {
        state.current.nearby = action.payload;
      });
  }
});


export const {changeCity, fillOffers, fillNearby, loadCurrentOffer, fillComments} = offerProcess.actions;
