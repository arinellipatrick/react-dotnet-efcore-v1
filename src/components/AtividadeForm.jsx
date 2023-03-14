import React, { useState, useEffect } from "react";

const atividadeInicial = {
  id: 0,
  titulo: "",
  prioridade: 0,
  descricao: "",
};

const AtividadeForm = ({
  addAtividade,
  ativs,
  atividadeSelecionada,
  atualizarAtividade,
  cancelarAtividade,
}) => {
  const [atividade, setAtividade] = useState(atividadeAtual());

  useEffect(() => {
    if (atividadeSelecionada.id !== 0) {
      setAtividade(atividadeSelecionada);
    }
  }, [atividadeSelecionada]);

  function atividadeAtual() {
    if (atividadeSelecionada.id !== 0) {
      return atividadeSelecionada;
    } else {
      return atividadeInicial;
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (atividadeSelecionada.id !== 0) {
      atualizarAtividade(atividade);
    } else {
      return addAtividade(atividade);
    }
    setAtividade(atividadeInicial);
  };

  const handleCancelar = (event) => {
    event.preventDefault();

    cancelarAtividade();
    setAtividade(atividadeInicial);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAtividade({ ...atividade, [name]: value });
  };

  return (
    <>
      <h1>Atividade {atividade.id !== 0 ? atividade.id : ""}</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label>
          <input
            id="titulo"
            type="text"
            placeholder="Titulo"
            className="form-control"
            name="titulo"
            value={atividade.titulo}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Prioridade</label>
          <select
            className="form-select"
            id="prioridade"
            name="prioridade"
            value={atividade.prioridade}
            onChange={handleChange}
          >
            <option value="selected">Selecione ...</option>
            <option value="1">Baixa</option>
            <option value="2">Normal</option>
            <option value="3">Alta</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label>
          <textarea
            name="descricao"
            value={atividade.descricao}
            onChange={handleChange}
            id="descricao"
            type="text"
            className="form-control"
          />
          <hr />
        </div>

        <div className="col-12 mt-0">
          {atividade.id === 0 ? (
            <button type="submit" className="btn btn-outline-secondary">
              <i className="fas fa-plus me-2"></i>
              Atividade
            </button>
          ) : (
            <>
              <button type="submit" className="btn btn-outline-success me-2">
                <i className="fas fa-plus me-2"></i> Salvar
              </button>
              <button
                onClick={handleCancelar}
                className="btn btn-outline-warning"
              >
                <i className="fas fa-plus me-2"></i> Cancelar
              </button>
            </>
          )}
        </div>
      </form>
    </>
  );
};

export default AtividadeForm;
