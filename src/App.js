import React from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import "./assets/App.css";
import "./assets/index.css";
const App = () => {
  const [notas, setNotas] = React.useState([]);

  function criarNota(titulo, texto) {
    const novaNota = { titulo, texto };
    const novoArrayNotas = [...notas, novaNota];
    setNotas(novoArrayNotas);
  }

  return (
    <section className="conteudo">
      <FormularioCadastro criarNota={criarNota} />
      <ListaDeNotas notas={notas} />
    </section>
  );
};

export default App;
