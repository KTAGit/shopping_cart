import { Navbar } from './Navbar'
import { Home } from './Home'
import { Footer } from './Footer'
import { Outlet } from 'react-router'
import { useEffect, useState } from "react"

function App() {

const [data, setData] = useState(null)
const [cart, setCart] = useState([])

    useEffect(() =>  {
        const loadData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                const result = await response.json()
                setData(result)
            }
            catch (error) {
                console.error("Failed to fetch:", error)
            }
        }
        loadData()
    },[])
  return (
    <>
    <Navbar cart={cart}/>
    <div className='main-content'>
        <Outlet context={[data, setData, cart, setCart]}/>
    </div>
    <Footer /> 
    </>
  )
}

export default App
