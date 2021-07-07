import logo from './logo.svg';
import { nanoid } from 'nanoid';
import './App.css';
import StudentList from './component/student-list/student-list';

function App() {

  const students = [
  {
    id: nanoid(),
    nom: "Dupont",
    prenom: "Jean",
    option: "Mathématique",
    sexe: "Homme",
    resultat: 85
  },
  {
    id: nanoid(),
    nom: "Duciel",
    prenom: "Josephine",
    option: "Philosophie",
    sexe: "Femme",
    resultat: 61
  },
  {
    id: nanoid(),
    nom: "Van Dijk",
    prenom: "Kevin",
    option: "Ingénieur",
    sexe: "Homme",
    resultat: 41
  }
]

  return (
    <div className="App">
      <StudentList students={students} />
    </div>
  );
}

export default App;
