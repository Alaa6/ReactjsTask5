import { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getStudentDetails } from '../actions'


const CarDetails = ({ getStudentDetails, details, match }) => {
    // const id = match.params.id
    // console.log(id)
    
    useEffect(() => {
        getStudentDetails()
        return ()=>{
            console.log('cleanup (unmount)')
            // clearCarDetails()
        }
    },[])

    // const renderCarDetails = (details) => {
    //     if (details && details.id) {
    //         return (
    //             <div>
    //                 <h2 className="d-flex justify-content-between">
    //                     <span>{details.brand}</span>
    //                     <span>{details.model} {details.year}</span>
    //                 </h2>
    //                 <img className="w-100" src={`/images/${details.image}`} />
    //                 <p className="mt-2"><span style={{color:'black'}}>Description: </span>
                        
    //                     {details.description}</p>
    //             </div>
    //         )
    //     }
    //     return ''
    // }
    // return (<div className="alert alert-light">
    //     {/* {renderCarDetails(details)} */}
    // </div>)

}


const mapStateToProps = (state) => {
    console.log(state)
    return {
        // details: state.cars.details
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getStudentDetails }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CarDetails)

