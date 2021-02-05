
export const students = (state = {}, action) => {

    console.log(action , "action     jjjjj");
    
    switch (action.type) {
        case "STUDENTS_LIST": {

            return action.payload

        }
       
        default:
            return state  // return new state 
    }

}