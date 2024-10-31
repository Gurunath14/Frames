import './App.css'
import { getcontent } from './utils/apputlis'

function App() {
  const content :any=getcontent("Home")
  console.log("home",content)
  return (
  <></>
  )
}

export default App
