import { useEffect, useState } from 'react'
import { ThemeProvider } from '../contexts/theme'
import ThemeBtn from '../components/ThemeBtn'
import Card from '../components/Card'


function App() {

  const [themeMod,setThemeMode] = useState("light")

  const darkTheme = () =>{
    setThemeMode("dark")
  }
  const lighTheme = () =>{
    setThemeMode("light")
  }

  // Change in Theme from here

  useEffect(() => {

    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(themeMod)
  },[themeMod])


  return (
    <>
      <ThemeProvider value={{themeMod,darkTheme,lighTheme}}>

        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeBtn />
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card />
            </div>
          </div>
        </div>
      </ThemeProvider>

    </>
  )
}

export default App
