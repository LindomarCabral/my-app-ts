import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        hello world
        <Card
          id={1}
          paragraph="Typescript"
          details="Ts para frontend e backend"
        />
        <Card id={2} paragraph="HTML" details="HTML para frontend e backend" />
      </Layout>
    </>
  );
}

export default App;
