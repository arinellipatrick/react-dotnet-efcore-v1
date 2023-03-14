import { useEffect, useState } from "react";
import "./App.css";
import AtividadeForm from "./components/AtividadeForm";
import AtividadeLista from "./components/AtividadeLista";
import Atividades from "./components/Atividades";

function App() {
  const [index, setIndex] = useState(0);
  const [ativs, setAtivs] = useState([]);
  const [atividade, setAtividade] = useState({ id: 0 });

  useEffect(() => {
    ativs.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            ativs.map((ativ) => ativ.id)
          ) + 1
        );
  }, [ativs]);

  const editarAtividade = (id) => {
    const atividade = ativs.filter((ativ) => ativ.id === id);
    setAtividade(atividade[0]);
  };

  function cancelarAtividade() {
    setAtividade({ id: 0 });
  }

  function atualizarAtividade(ativ) {
    setAtivs(ativs.map((item) => (item.id === ativ.id ? ativ : item)));
    setAtividade({ id: 0 });
  }

  function deletarAtividade(id) {
    const atividadesFiltradas = ativs.filter((ativ) => ativ.id !== id);

    setAtivs(atividadesFiltradas);
  }

  function addAtividade(ativ) {
    setAtivs([...ativs, { ...ativ, id: index }]);
  }

  return (
    <div>
      <AtividadeForm
        addAtividade={addAtividade}
        ativs={ativs}
        atividadeSelecionada={atividade}
        atualizarAtividade={atualizarAtividade}
        cancelarAtividade={cancelarAtividade}
      />
      <AtividadeLista
        ativs={ativs}
        deletarAtividade={deletarAtividade}
        editarAtividade={editarAtividade}
      />
    </div>
  );
}
export default App;
