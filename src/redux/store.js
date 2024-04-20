import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filtersReducer } from "./reducers";

const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
      },
     });

export default store;