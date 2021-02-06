import { useRef } from 'react'
import { getStudents, search } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useState, useEffect } from 'react'
import { students } from '../reducers/studentList'



const Search = (   {  studentList }  ) => { 


    const [list, setList] = useState([]);

    useEffect(() => {
        setList(studentList)
        return () => {
        }


    },[])

    // const seachInput = useRef()


    const searchStudent = (keyword) => { 
        getStudents(keyword)
        const result = words.filter(word => word.length > 6);

    }



    return <div className="col text-center">
        <div className="form-group">
            <input  className="form-control rounded-pill text-center" type="text" placeholder="enter brand" onChange ={(e)=> searchStudent(e.target.value)
            }  />
        </div>

        <div className="form-group">
            <input className="btn btn-dark w-25" type="button" value="search"
                />
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        studentList: state.studentList
    }
}

export default connect(mapStateToProps, null)(Search)



