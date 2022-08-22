
// eslint-disable-next-line import/no-anonymous-default-export
const reducer= (state,action) => {
    switch (action.type) {
        case "SET_TECHNOLOGY":
          return {
            ...state,
            tech: action.tech,
          };
        default:
          return state;
      } 
      
}
export default reducer;