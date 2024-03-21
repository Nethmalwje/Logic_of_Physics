import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <section>
      <h1>Unauthorized</h1>

      <br />
      <p>you do not have access to the these cvo,ponents</p>
      <div>
        <button onClick={{ goBack }}>gobach</button>
      </div>
    </section>
  );
};
export default Unauthorized;
