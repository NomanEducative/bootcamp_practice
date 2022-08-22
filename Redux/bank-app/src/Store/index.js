import { createStore } from "redux"; //an import from the redux library
import reducer from "../Reducers";

const initialState = { username: "Nomi",totalAmount: 2500701};
const store = createStore(reducer,initialState);



export default store;