import { createSlice } from '@reduxjs/toolkit';
import { fetchCampers } from './thunks';

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.error = payload;
  state.isLoading = false;
};

export const campersSlice = createSlice({
  name: 'campers',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder.addCase(fetchCampers.pending, handlePending);
    builder.addCase(fetchCampers.rejected, handleRejected);
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.error = null;
      state.isLoading = false;
      state.items = action.payload;
    });
  },
});

export const { setFilter } = campersSlice.actions;

export default campersSlice.reducer;
