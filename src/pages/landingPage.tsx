import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h3>Existem 2 rotas "cadastradas" na api</h3>
      <p>Use os botões para ir mais rapido para a rota,</p>
      <p>porem também irá funcionar trocar o nome da url</p>
      <button onClick={() => navigate("/connectadoc")}>connectadoc</button>
      <button onClick={() => navigate("/connectadocdark")}>connectadocdark</button>
    </div>
  );
};

export { LandingPage };
