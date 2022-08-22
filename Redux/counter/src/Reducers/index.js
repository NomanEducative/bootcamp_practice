const reducer=(state,action)=>{
    switch (action.type) {
        case "CHANGE_SESSION":
            return {
                ...state,
                activeSession:action.session
            }
        case "DAYS":
          return {
            ...state,
            days: state.days+action.payload,
          };
          case 'HOURS':
            return{
                ...state,
            hours: state.hours+action.payload,
            }
            case 'MINUTES':
            return{
                ...state,
                minutes: state.minutes+action.payload,
            }
            case 'SECONDS':
            return{
                ...state,
                seconds: state.seconds+action.payload,
            }

        default:
          return state;
      } 
}
export default reducer;