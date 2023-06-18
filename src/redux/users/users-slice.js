import { createSlice } from '@reduxjs/toolkit';
import {
  getAllUsers,
  updUserFollowing,
  getUserByCategory,
  pushFollower,
} from './users-operation';

const initialState = {
  cards: [],
  foll: [],
  category: null,
  loading: false,
  error: null,
  fullLoad: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAllUsers.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getAllUsers.fulfilled, (store, { payload }) => {
        if (payload.length === 0) {
          store.fullLoad = true;
        }
        store.loading = false;
        store.error = null;
        store.cards = [...payload];
      })
      .addCase(getAllUsers.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(updUserFollowing.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(updUserFollowing.fulfilled, (store, { payload }) => {
        const index = store.cards.findIndex(item => item.id === payload.id);
        if (index !== -1) {
          store.cards[index] = payload;
        }
      })
      .addCase(updUserFollowing.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(getUserByCategory.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(getUserByCategory.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.error = null;
        store.cards = payload;
      })
      .addCase(getUserByCategory.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })

      .addCase(pushFollower.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(pushFollower.fulfilled, (store, { payload }) => {
        if (payload.length === 0) {
          store.fullLoad = true;
        }
        store.loading = false;
        store.error = null;

        // store.foll.push(payload);

        const hasFollow = store.foll.includes(payload);
        if (!hasFollow) {
          store.foll.push(payload);
        } else if (hasFollow) {
          store.foll = store.foll.filter(item => item !== payload);
        }
      })
      .addCase(pushFollower.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});

export default userSlice.reducer;
