import { createSlice } from "@reduxjs/toolkit";
import sliderServices from "../services/slider.services";

const initialState = {
  entities: null,
  error: null,
  isLoading: true
};

const sliderSlice = createSlice({
  name: "slider",
  initialState,
  reducers: {
    sliderRequested: (state) => {
      state.isLoading = true;
    },
    sliderReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    sliderError: (state, action) => {
      state.error = action.payload;
      state.isLoading = true;
    }
  }
});

const { actions, reducer: sliderReducer } = sliderSlice;
const { sliderRequested, sliderReceived, sliderError } = actions;

export const loadSliderList = () => async (dispatch) => {
  dispatch(sliderRequested());
  try {
    const { content } = await sliderServices.get();
    dispatch(sliderReceived(content));
  } catch (error) {
    dispatch(sliderError(error.message));
  }
};

export const getSliderList = () => (state) => state.slider.entities;
export const getLoadingSliderStatus = () => (state) => state.slider.isLoading;

export default sliderReducer;
