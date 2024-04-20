import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filtersReducer } from "./reducers";

const rootReducer = (state = {}, action) => {

    return {
        contacts: contactsReducer(state.contacts, action),
        filters: filtersReducer (state.filters, action),
    }
  
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;