import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./reducers";

const rootReducer = (state = {}, action) => {

    return {
        contacts: contactsReducer(state.contacts, action),
    }
  
}

const store = configureStore({
    reducer: rootReducer,
});

export default store;