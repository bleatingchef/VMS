import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import HomePage1 from './components/HomePage1'
import Qrcode from './components/Qrcode'
import Clients from './components/Clients'
import Features from './components/Features'
import Faqs from './components/Faqs'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <HomePage1/>
      <Qrcode/>
      <Clients/>
      <Features/>
      <Faqs/>
      <Footer/>
      {/* <Route path="/navbar" element={<Navbar />} /> */}
    </div>
  )
}

export default App
