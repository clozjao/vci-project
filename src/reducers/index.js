import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { vciReducer } from "./vciWS";
const store = configureStore({
  reducer: {
    vciReducer,
  },
});

export default store;
