import { Circulo, Quadrado } from "./Prototype";

import styles from "./styles/quadrado.module.css";

async function App() {
  const quadrados: Quadrado[] = [];
  const circulos: Circulo[] = [];

  function adicionarQuadrado() {
    if (!quadrados.length) quadrados.push(new Quadrado(16, "blue"));

    quadrados.push(quadrados[quadrados.length - 1].clone());
  }

  return (
    <div className="App">
      <section>
        {quadrados.map((quadrado) => (
          <div className={styles.quadrado} color={quadrado.color}></div>
        ))}

        <div>
          <button type="button" onClick={adicionarQuadrado}></button>
        </div>
      </section>
    </div>
  );
}

export default App;
