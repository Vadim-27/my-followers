import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../shared/services/tweetsApi';

export const getAllUsers = createAsyncThunk(
  'user/all',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getAllUsers(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const updUserFollowing = createAsyncThunk(
  'user/upd following',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.updUserFollowing(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const getUserByCategory = createAsyncThunk(
  'user/by category',
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.getUserByCategory(data);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
export const pushFollower = createAsyncThunk(
  'user/addFollow',
  async (data, { rejectWithValue }) => {
    try {
      const result = data;
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
