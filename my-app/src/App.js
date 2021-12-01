import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          ATR MI NODE
        </a>
      </header>
    </div>
  );
}


const obj = [1,2]

const obj1 = obj[0]
const obj2 = obj[1]


//Una forma de asignale variales a los arrays

const [aux1, aux2] = obj


if(aux1 == 1){
  console.log('hola')

}else{
  console.log('adios')
}


//operador ternario lo mismo q un if

const rest = aux1 == 1 ? console.log ('hola') : console.log('Adios')



export default App;
