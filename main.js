import './style.css'
import { BreakingBadApp } from './src/breakingbad/breaking-bad-app'
import heisenberImage from './public/assets/logo/Heisenberg.png'

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${heisenberImage}" class="logo" alt="Heisenberg" />
    <h1 id="app-title">Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`
const element = document.querySelector('.card')

BreakingBadApp(element);
