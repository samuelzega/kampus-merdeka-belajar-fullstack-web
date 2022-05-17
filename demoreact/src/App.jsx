import { Fragment, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Button, DatePicker, version } from 'antd'
import Counter from './components/counter'

function App() {
    const [angka, setAngka] = useState(0)
    return (
     
      <>
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Counter angka={angka} setAngka={setAngka} />
                <div>hasil = {angka}</div>
                <h1>antd version: {version}</h1>
                <DatePicker />
                <Button>sample</Button>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
      <div>

      </div>
      </>
    )
}

export default App
