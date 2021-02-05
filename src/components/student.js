const Student = ({ studentInfo,history }) => {

    const goToDetails = ()=>{
        // history.push(`/cars/${studentInfo.id}`)
    }

    if (studentInfo) {
        return <div className="alert alert-dark d-flex justify-content-between">
            <h4 className="align-self-center">
                {studentInfo.name}
            </h4>
          
        </div>
    }
}
export default Student
