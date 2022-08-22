const createAction=(type,payload)=>({ type: type, payload:payload })

const changeSession=(session)=>({type:"CHANGE_SESSION",session:session})

export default createAction
export {changeSession}