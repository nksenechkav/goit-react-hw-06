import { createSlice } from "@reduxjs/toolkit";

const InitialFilters = {
    filters: {
      name: ""
    }
  }

const filtersSlice = createSlice({
  name: "contacts/items",
  initialState: InitialFilters,
  reducers: {
      setFilter: (state, action) => {
        state.filters.name = action.payload;
    },
  },
});


// Експортуємо генератори екшенів та редюсер
export const { setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;