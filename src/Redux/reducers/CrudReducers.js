let initialState={
    users:[],
    err:null,
}

const CrudReducers = (state=initialState,action) =>{
    switch (action.type) {
        case 'viewuser':
            return {
                ...state,
                users : action.paylod,
                err : null
            }

            case 'viewusererr':
                return{
                    ...state,
                    err: action.paylod
                }

            case 'addrecord' : 
                return{
                    ...state,
                    users : [...state.users],
                    error : null
                }
            case 'addrecorder' :
                return{
                    ...state,
                    error:action.paylod
                }
            case "deleteuser":
                return {
                    ...state,
                    users : state.users.filter(val => val.id != action.paylod),
                    error : null
                }
            
    
        default:
            return state;
    }
}

export default CrudReducers;