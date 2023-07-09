import './App.css'

import Stars from './components/Stars';

function App() {
  return (
    <ul className="app">
      <Stars count={1} />
      <Stars count={4} />
      <Stars count={5} />
      <Stars count={6} />
    </ul>
  )
}

export default App