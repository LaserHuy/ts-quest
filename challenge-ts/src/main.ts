import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'

import { setupCounter } from './counter.ts'
import { challenge } from "./challenge.ts"
import { hello } from "./hello.ts"
import { personAi } from "./person.ts"
import { bankCustomer } from "./bank.ts"

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
challenge()
hello()
personAi()
bankCustomer()