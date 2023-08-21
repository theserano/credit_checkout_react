import './App.scss'
import Display from './components/Display/Display'
import Payment from "./components/Payment/Payment";

function App() {

  return (
    <div className='App'>

      <div className="display">
        <Display />
      </div>

      <div className="payment">
        <Payment /> 
      </div>

    </div>
  )
}

export default App
