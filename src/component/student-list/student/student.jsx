import PropTypes from 'prop-types'
import style from './student.module.css'


const Student = function(props) {

    const {nom, prenom, option, sexe, resultat} = props;

    let resultatCorrect = true
    if ((resultat < 0 || resultat > 100) || !resultat) {
        resultatCorrect = false
    }

    let sexeCorrect = true
    if (sexe !== 'Homme' && sexe !== 'Femme' && sexe !== 'Neutre') {
        sexeCorrect = false
    }

    let color;
    if (resultat > 70) {
        color = style.backgroundHigh
    }
    else if (resultat > 50) {
        color = style.backgroundMedium
    }
    else {
        color = style.backgroundLow
    }

    const resultatOK = resultat > 49

    let grade;
    switch (true) {
        case (resultat > 95):
            grade = "E"
            break
        case (resultat > 79):
            grade = "TB"
            break
        case (resultat > 59):
            grade = "B"
            break
        case (resultat > 49):
            grade = "S"
            break
        case (resultat > 39):
            grade = "I"
            break
        case (resultat < 40):
            grade = "IG"
            break
        default:
            grade = "NA"
            break
    }

    return(
        <tr className={color}>
            <td>{nom}</td>
            <td>{prenom}</td>
            <td>{option}</td>
            <td>{sexeCorrect ? sexe : "Sexe mal encodé"}</td>
            {
            (resultatOK && resultatCorrect) ? 
                <td>{resultat}</td> : 

                <td className={style.resultatBad}>
                    {(resultatCorrect) ? resultat : <span className={style.noResultat}>Pas de résultat</span>}
                </td>
            }
            <td>{grade}</td>
        </tr>
    )

}

Student.propTypes = {
    nom: PropTypes.string.isRequired,
    prenom: PropTypes.string.isRequired,
    option: PropTypes.string.isRequired,
    sexe: PropTypes.string.isRequired,
    resultat: PropTypes.number
}

export default Student;