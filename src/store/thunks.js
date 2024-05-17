import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://663f44d0e3a7c3218a4c9e95.mockapi.io/contacts';

export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async () => {
    try {
      const { data } = await axios.get('/data');
      console.log(data);
      return data;
    } catch (error) {
      throw error;
    }
  }
);
