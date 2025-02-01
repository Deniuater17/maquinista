import React, { useEffect, useState } from "react";
import axios from "axios";

const Temas = () => {
  const [temas, setTemas] = useState([]);
  const [nombre, setNombre] = useState("");

  // Obtener temas desde el backend
  useEffect(() => {
    fetchTemas();
  }, []);

  const fetchTemas = () => {
    axios.get("http://localhost:5000/api/temas")
      .then(response => setTemas(response.data))
      .catch(error => console.error("Error al obtener los temas:", error));
  };

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/temas", { nombre })
      .then(() => {
        setNombre(""); // Limpiar el campo
        fetchTemas(); // Refrescar la lista
      })
      .catch(error => console.error("Error al agregar el tema:", error));
  };

  return (
    <div>
      <h2>Lista de Temas</h2>
      <ul>
        {temas.map((tema) => (
          <li key={tema._id}>{tema.nombre}</li>
        ))}
      </ul>

      <h3>Agregar Nuevo Tema</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre del tema"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <button type="submit">Agregar Tema</button>
      </form>
    </div>
  );
};

export default Temas;

