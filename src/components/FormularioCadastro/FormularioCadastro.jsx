import React from "react";
import "./estilo.css";
const FormularioCadastro = (props) => {
  let titulo = "";
  let texto = "";

  function handleMudancaTitulo(e) {
    e.stopPropagation();
    titulo = e.target.value;
  }

  function handleMudancaTexto(e) {
    e.stopPropagation();
    texto = e.target.value;
  }

  function criarNota(e) {
    e.preventDefault();
    e.stopPropagation();
    props.criarNota(titulo, texto);
  }

  return (
    <form className="form-cadastro" onSubmit={criarNota}>
      <input
        type="text"
        placeholder="Título"
        className="form-cadastro_input"
        onChange={handleMudancaTitulo}
      />
      <textarea
        rows={15}
        placeholder="Escreva sua nota..."
        className="form-cadastro_input"
        onChange={handleMudancaTexto}
      />
      <button className="form-cadastro_input form-cadastro_submit">
        Criar Nota
      </button>
      <button className="form-cadastro_input form-cadastro_reset" type="reset">
        Limpar
      </button>
    </form>
  );
};

export default FormularioCadastro;
