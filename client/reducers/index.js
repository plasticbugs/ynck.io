import { combineReducers } from 'redux';

import { recentImages, recentImagesHasErrored, recentImagesIsLoading } from './reducerRecentImages';
import { getFavoritesIsLoading, getFavoritesHasErrored, userFavorites } from './reducerFavorites';
import { userData } from './reducerUserInfo';
import { shop } from './reducerShopInfo';



const rootReducer = combineReducers({
  recentImages, 
  recentImagesHasErrored,
  recentImagesIsLoading,
  getFavoritesHasErrored,
  getFavoritesIsLoading,
  userFavorites,
  userData,
  shop
});

export default rootReducer;

