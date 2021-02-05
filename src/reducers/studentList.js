
export const students = (state = {}, action) => {


    
    switch (action.type) {
        case "STUDENT_LIST": {

            return action.payload

        }
       
        default:
            return state  
    }

}


export const studentDetails = (state = {}, action) => {

  
    
    switch (action.type) {
        case "STUDENT_DETAILS": {

            return action.payload

        }
       
        default:
            return state  
    }

}