import PropTypes from 'prop-types'

import Student from './student/student'

const StudentList = function(props) {

    const studentsJSX = props.students.map(
        (student) => <Student key={student.id} {...student} />
    );

    return(
        <div>
        <h2>Liste des étudiants</h2>
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Option</th>
                    <th>Sexe</th>
                    <th>Resultat</th>
                    <th>Grade</th>
                </tr>
            </thead>
            <tbody>
                {studentsJSX}
            </tbody>
        </table>
        </div>
    )

}

StudentList.propTypes = {
    students: PropTypes.array.isRequired
}

export default StudentList;