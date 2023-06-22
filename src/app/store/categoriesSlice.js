import { createSlice } from "@reduxjs/toolkit";
import categoryService from "../services/categories.services";
import { isOutDated } from "../utils/isOutDate";

const initialState = {
  entities: null,
  error: null,
  isLoading: true,
  lastFetch: null
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    categoriesRequested: (state) => {
      state.isLoading = false;
    },
    categoriesFailed: (state, action) => {
      state.isLoading = true;
      state.error = action.payload;
    },
    categoriesReceived: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    }
  }
});

const { actions, reducer: categoriesReducer } = categorySlice;

const { categoriesRequested, categoriesFailed, categoriesReceived } = actions;

export const loadListCategories = () => async (dispatch, useState) => {
  const { lastFetch } = useState().categories;

  if (isOutDated(lastFetch)) {
    dispatch(categoriesRequested);

    try {
      const { content } = await categoryService.get();
      dispatch(categoriesReceived(content));
    } catch (error) {
      dispatch(categoriesFailed(error.message));
    }
  }
};

export const loadSliderCategory = (payload) => (state) => {
  const arrayCategories = [];

  if (
    state.categories.entities &&
    typeof state.categories.entities[Symbol.iterator] === "function"
  ) {
    for (const categorySlider of payload) {
      for (const category of state.categories.entities) {
        if (categorySlider === category._id) {
          arrayCategories.push(category);
        }
      }
    }
  }

  return arrayCategories;
};

export const getListCategories = () => (state) => state.categories.entities;
export const getLoadingStatusCategories = () => (state) =>
  state.categories.isLoading;

export default categoriesReducer;
