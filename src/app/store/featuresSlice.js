import { createSlice } from "@reduxjs/toolkit";
import featuresService from "../services/features.services";

const initialState = {
  entities: [],
  isLoading: true,
  error: null
};

const featuresSlice = createSlice({
  name: "features",
  initialState,
  reducers: {
    featuresRequested: (state) => {
      state.isLoading = true;
    },
    featuresFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    featuresReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: featuresReducer } = featuresSlice;
const { featuresReceived, featuresFailed, featuresRequested } = actions;

export const loadFeaturesList = () => async (dispatch) => {
  dispatch(featuresRequested);
  try {
    const { content } = await featuresService.get();
    dispatch(featuresReceived(content));
  } catch (error) {
    dispatch(featuresFailed(error.message));
  }
};

export const getListFeatures = () => (state) => state.features.entities;

export default featuresReducer;
