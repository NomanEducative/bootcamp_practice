import { createStore } from "redux"; //an import from the redux library
import reducer from "../Reducers";

const initialState = { tech: "React " };
const store = createStore(reducer,initialState);



export default store;