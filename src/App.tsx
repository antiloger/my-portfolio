import Aboutme from './component/aboutme';
import Backline from './component/backline'
import Navbar from './component/navbar'
import { ReactTyped } from "react-typed";



function App() {
  const data = {
    "name": "K. N Piyumina",
    "age": 22,
    "country": "Sri Lanka",
    "languages": [
      "Go", "Rust", "Python", "C#"
    ],
    "skill": [
      "FullStack Dev.", ""
    ],
    "interest": [
      "system level Programming",
      "ML/AI",
      "Game Development"
    ]
  };

  const details = Object.entries(data)

  const formatValue = (value) => {
    if(Array.isArray(value)){
      return(
        
      )
    }
  }

  return (
    <>
      <Backline />
      <Navbar />
      <div className="flex flex-col  justify-center items-center">
        <section className="h-screen w-full flex items-center justify-center">
          <div className=" place-content-center ">
            <ReactTyped
              className="text-white"
              strings={['<span style="color: orange">://</span> Hello! I am <span style="color: green">K. N Piyumina</span>']}
              typeSpeed={100}
              loop
              cursorChar="_"
            />
          </div>
        </section>
        <section className="w-full h-screen items-center justify-center">
          <h1 className='ml-12 text-xl text-orange-600'>{">"} Who _</h1>
          <div className=" place-content-center">
            <div className='flex  w-full h-screen columns-2' >
              <div className='flex w-1/2 items-center justify-center ' >
                <Aboutme />
              </div>
              <div className='flex flex-col text-left w-1/2 items-center justify-center' >
                <div className='text-left item-left'>
                  <p>
                    <pre>
                      {details.map(([key, value], index) => (
                        <span key={index}>
                          <span style={{ color: 'red' }}>{key}:</span>{' '}
                          <span style={{ color: 'blue' }}>{JSON.stringify(value)}</span>{'\n'}
                        </span>
                      ))}
                    </pre>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>

  )
}

export default App
