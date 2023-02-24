import {createSlice} from '@reduxjs/toolkit';
export const GiphyStore = createSlice({
  name: 'GiphyStore',
  initialState: {
    userInfo: {
      email: '',
      password: '',
    },
    favorites: [],
  },
  reducers: {
    setNew: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        [action.payload.name]: action.payload.value,
      };
    },
    setAddToFavorites: (state, action) => {
      state.favorites = [...state.favorites, action.payload];
    },
    setRemoveItem(state, action) {
      const itemId = action.payload;
      state.favorites = state.favorites.filter(item => item.id !== itemId);
    },
    setRemoveAllFavorites(state) {
      state.favorites = [];
    },
  },
});
export const {setNew, setAddToFavorites, setRemoveItem, setRemoveAllFavorites} =
  GiphyStore.actions;
export default GiphyStore.reducer;
