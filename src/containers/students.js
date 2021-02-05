import {useState , useEffect} from 'react'
import { connect } from 'react-redux';
import Student from '../components/student'
import {getStudents} from '../actions'

import {bindActionCreators} from 'redux'




const Students = ({ studentList ,history}) => {

    console.log(studentList , "studentList");

    useEffect(() => {
        console.log(getStudents().then((res)=> console.log(res , " reeeeeeeeeees")
        ) , 'try getStudents()');
        
      getStudents()
        return ()=>{
         console.log(getStudents() , "getStudents");
         
           
        }
    },[])

    

    if (studentList) {
        if (studentList.length > 0)
            return (
                <div className="alert ">
                    {studentList.map((student) => {

                        return <Student key={student.id} studentInfo={student} history={history}/>
                    })}
                </div>)
        return <p>
            Enter a valid brand and search again :P 
        </p>
    }

    return <p>
        Enter a brand and search.
    </p>
}

const mapStateToProps = (state) => {
    return {
        studentList: state.studentList
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudents}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Students)