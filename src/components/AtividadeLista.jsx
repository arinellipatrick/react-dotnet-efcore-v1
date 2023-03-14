import React from "react";
import Atividades from "./Atividades";

const AtividadeLista = ({ ativs, deletarAtividade, editarAtividade }) => {
  return (
    <div className="mt-3">
      {ativs.map((ativ) => (
        <Atividades
          key={ativ.id}
          deletarAtividade={deletarAtividade}
          editarAtividade={editarAtividade}
          ativ={ativ}
        />
      ))}
    </div>
  );
};

export default AtividadeLista;
