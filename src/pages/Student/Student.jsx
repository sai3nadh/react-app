import './Student.css'
import PropTypes from 'prop-types'

// function Student(props){

//     return(
//         <div className="student">
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//             <p>Student: {props.isStudent? "yes" : "no"}</p>
//         </div>
//     );
// }
function Student({ name = "Guest", age = 19, isStudent = false }) {
    return (
        <div className="student">
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "yes" : "no"}</p>
        </div>
    );
}
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
};

// Student.defaultProps  = {
// name : "Guest",
// age : 19,
// isStudent : false
// };

export default Student 