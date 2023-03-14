import React from "react";

function Atividades({ ativ, deletarAtividade, editarAtividade }) {
  function prioridadeStyle(param, icone) {
    switch (param) {
      case "1":
        return icone ? "smile" : "success";
      case "2":
        return icone ? "meh" : "dark";
      case "3":
        return icone ? "frown" : "warning";
      default:
        return "Não definido";
    }
  }

  function prioridadeLabel(param) {
    switch (param) {
      case "1":
        return "Baixa";
      case "2":
        return "Normal";
      case "3":
        return "Alta";
      default:
        return "Não definido";
    }
  }
  return (
    <div
      className={
        "card mb-2 shadow-sm border-" + prioridadeStyle(ativ.prioridade)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge rounded-pill bg-secondary me-1">
              {ativ.id}
            </span>
            - {ativ.titulo}
          </h5>

          <h6>
            Prioridade:
            <span className={"ms-1 text-" + prioridadeStyle(ativ.prioridade)}>
              <i
                className={
                  "me-1 far fa-" + prioridadeStyle(ativ.prioridade, true)
                }
              ></i>
              {prioridadeLabel(ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className="card-text">{ativ.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button
            onClick={() => editarAtividade(ativ.id)}
            className="me-2 btn btn-outline-primary btn-sm"
          >
            <i className="fas fa-pen me-2"></i>
            Editar
          </button>
          <button
            onClick={() => deletarAtividade(ativ.id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="fas fa-trash me-2"></i>
            Deletar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Atividades;
