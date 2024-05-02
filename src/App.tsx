import Backline from './component/backline'
import Navbar from './component/navbar'
import { ReactTyped }from "react-typed";


function App() {

  return (
    <>
      <Backline />
      <Navbar />
      <div className="flex flex-col h-screen justify-center items-center">
        <section className="h-screen w-full flex items-center justify-center">
          <div className="text-center">
            <ReactTyped
              className="text-white"
              strings={['<span style="color: orange">://</span> Hello! I am <span style="color: green">K. N Piyumina</span>']}
              typeSpeed={100}
              loop
              cursorChar="_"
            />
          </div>
        </section>
        <section className="w-full flex items-center justify-center">
          <div className=" text-center">
            {/* Content for section 2 */}
            <h1>hello</h1>
          </div>
        </section>
        
      </div>
    </>

  )
}

export default App
