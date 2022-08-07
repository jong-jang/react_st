import {configureStore} from "@reduxjs/toolkit"
import colorReducer from "./modules/color"
import counterReducer from "./modules/counter"
import changeColorReducer from "./modules/changecolor"
import todos from "./modules/todos"

const store = configureStore({
  reducer: {
    colorPage : colorReducer,
    counterA : counterReducer,
    changeColorReducer,
    todos
  },
});

export default store;