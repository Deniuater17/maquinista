import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>App de Estudio</h1>
      <nav>
        <ul>
          <li><Link to="/temas">Ver Temas</Link></li>
          <li><Link to="/flashcards">Ver Flashcards</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;

