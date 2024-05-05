import Aboutme from './component/aboutme';
import Backline from './component/backline'
import Moreme from './component/moreme';
import Navbar from './component/navbar'
import { ReactTyped } from "react-typed";



function App() {

  return (
    <>
      <Backline/>
      <Navbar />
      <div className="flex flex-col  justify-center items-center">
        <section className="h-screen w-full flex items-center justify-center">
          <div className=" place-content-center ">
            <ReactTyped
              className="text-white text-lg"
              strings={['<span style="color: orange">://</span> Hello! I am <span style="color: green">K. N Piyumina</span>', '> welcome to my Portfolio']}
              typeSpeed={100}
              loop
              cursorChar="_"
            />
          </div>
        </section>
        <section id='who' className="w-full  h-screen items-center justify-center">
          <h1 className='ml-10 text-orange-600 my-5 text-xl'>{">"} Who _</h1>
          <div className=" place-content-center">
            <div className='flex w-full  items-center justify-center' >
                <Aboutme />
            </div>
          </div>
        </section>
        <section id='who1' className="w-full  h-screen items-center justify-center">
          <h1 className='ml-10 text-orange-600 my-5 text-xl'>{">"} Who _</h1>
          <div className=" place-content-center">
            <div className='flex w-full  items-center justify-center' >
                <Moreme/>
            </div>
          </div>
        </section>


      </div>
    </>

  )
}

export default App
