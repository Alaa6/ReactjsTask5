

const baseURL = "http://localhost:3001/students"

export const getStudents = async () => {
    let payload;

    try{
        let response = await fetch(`${baseURL}`)
        payload = await response.json()
        console.log(payload)
    }
    catch(err){
        console.log(err)
    }
  
  
    
    return {
        type: 'STUDENTS_LIST',
        payload
    }

}

