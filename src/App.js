// import logo from './logo.svg';
// import './App.css';
import Heading from './Components/Heading';
import Navbar from './Components/Nabar';
import Card from './Components/Card';
import Cdata from './Components/Cdata';



function App() {
  return (
    <>
      <Heading />
      <Navbar />
      <div className="cards">

        {Cdata.map(function Netflix_card (val) {
          return (
            <Card
              id={val.id}
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
          );
        })
        }
      </div>
    </>
  );
}

export default App;
