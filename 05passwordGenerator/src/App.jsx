import { useState, useCallback, useEffect,useRef } from 'react'

function App() {
  const [lenght, setLenght] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [capsOnly, setCapsOnly] = useState(false);
  const [smallOnly, setSmallOnly] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numberAllowed) {
      str += "0123456789"
    }

    if (charAllowed) {
      str += "!@#$%&*()_"
    }

    if (capsOnly) {
     str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     console.log(str);
     setSmallOnly(false) // i first use here smallOnly = false ; goted constatn error then i get it what is the problem it was easy and explainable
    //  console.log(smallOnly);
     
     
    } 
    if (smallOnly) {
     str = "abcdefghijklmnopqrstuvwxyz"
     console.log(str);
     setCapsOnly(false)
     
    } 
    

    for (let i = 1; i <= lenght; i++) {

      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  },
    [lenght, charAllowed,capsOnly,smallOnly, numberAllowed]
  )

  useEffect(() => {
    passwordGenerator()
  }, [lenght, numberAllowed, charAllowed, passwordGenerator]
  )

  const copyToClipBord = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,10);  // this method use for set the rand of selection 
    window.navigator.clipboard.writeText(password)

  },[password])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-lg rounded-lg px-8 py-4 my-8 text-orange-400 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex rounded-lg shadow mb-4 overflow-hidden'>
          <input
            type="text"
            value={password}
            className='outline-none py-1 px-3 w-full  bg-white'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
           onClick={copyToClipBord}
           className='bg-blue-700 outline-none shrink-0 text-white px-2'
          

          >Copy</button>
        </div>

        <div className='text-sm flex flex-col gap-y-2 mt-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={20}
              value={lenght}
              className='cursor-pointer'
              onChange={(event) => setLenght(event.target.value)}
            />
            <label >Length: {lenght}</label>

          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((previousValue) => !previousValue)}
            />
            <label>Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id='charInput'
              onChange={() => {setCharAllowed((previousValue) => !previousValue)}}
            />
            <label>Symbols</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={capsOnly}
              id='charInput'
              onChange={() => {setCapsOnly((previousValue) => !previousValue)}}
            />
            <label>CAPS ONLY</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={smallOnly}
              id='charInput'
              onChange={() => {setSmallOnly((previousValue) => !previousValue)}}
            />
            <label>SMALL ONLY</label>
          </div>
        </div>

      </div>

    </>
  )
}

export default App
