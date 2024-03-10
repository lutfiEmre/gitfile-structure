import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import GitSelect from "./components/GitSelect.jsx";
import DeBounce from "./components/DeBounce.jsx";

function App() {
    const [data,setData] = useState([
        "app",
        "controllers",
        ''
    ])
    const value = data.at(-1)

    const changeHandle = (e) => {
        if (e.target.value.includes('/')){
            setData(names => [
                ...names,
                ''
            ])
        }else{
            setData(names => [
                ...names.slice(0, -1),
                e.target.value
            ])
        }
    }
    const keyDownHandle = (e) => {
        if (e.key === 'Enter'){
            setData(names => [
                ...names,
                ''
            ])
        }
        if (e.key === 'Backspace' && !e.target.value){
            e.preventDefault()
            setData(data => data.slice(0, -1))
        }

    }
  return (
    <>
        <div className={'w-full min-h-screen py-[50px] px-[100px] bg-gray-800'}>
            <GitSelect/>
        </div>
    </>
  )
}

export default App
