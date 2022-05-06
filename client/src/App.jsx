import { useState } from 'react'
import {Loader, Foooter, Navbar, Service, Transaction, Welcome} from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className='gradient-bg-welcome'>
        <Navbar />
        <Welcome />
      </div>
      <Service />
      <Transaction />
      <Foooter />
    </div>
  )
}

export default App
