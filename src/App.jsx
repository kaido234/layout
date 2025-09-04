import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div class="container">
    <div class="header">Dave Vincent B. Isip</div>
    <div class="content">
      <div class="content1">
        <div class="c1left">
          <div class="hero">Hero</div>
          <div class="sidebar">Sidebar</div>
        </div>
        <div class="c1right">
          <div class="mc">Main Content</div>
          <div class="ec">Extra Content</div>
        </div>
      </div>
      <div class="content2">
         <div class="ri">Related Images</div>
         <div class="rp">Related Posts</div>
      </div>
    </div>
    <div class="footer">C-PCIT9 IT3B</div>
  </div>
  )
}

export default App
