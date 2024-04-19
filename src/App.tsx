
import  { Card } from './components/Card'
import { Footer } from './components/Footer';
import { Header } from './components/Header';

function App() {
  return (
 <>
    <Header/>
    <div>
      hello world
      <Card 
        id={1}
        paragraph='Typescript'
        details='Ts para frontend e backend'
      />
      <Card 
        id={2}
        paragraph='HTML'
        details='HTML para frontend e backend'/>
    </div>
    <Footer />
 </>
  );
}

export default App;
