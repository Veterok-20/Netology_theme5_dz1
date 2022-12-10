import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';
// import Card1 from './components/Card1';
// import Card2 from './components/Card2';
import Card from './components/Card';
import datatitle from ".//datatitle.json";
import datatext from ".//datatext.json";
import databtn from ".//databtn.json";
import datapicture from ".//datapicture.json";


function App() {

  return (
    <>
      {[0, 1].map((item) => {
        return <Card datapicture={datapicture[item]} datatitle={datatitle[item]}
          datatext={datatext[item]} databtn={databtn[item]} />
      })
      }
    </>
  );
}

export default App;
