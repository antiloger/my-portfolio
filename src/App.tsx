import { useState } from 'react'
import Aboutme from './component/aboutme'
import Backline from './component/backline'
import Hero from './component/hero'
import Moreme from './component/moreme'
import Navbar from './component/navbar'
import Project from './component/project'



function App() {
  const [showcomp1, setcomp1] = useState(true);

  const handletoggle = () => {
    setcomp1(!showcomp1)
  };

  return (
    <div className=''>
      <Backline />
      <Navbar />
      <div className='felx justify-center items-center'>
        <div className='w-full'>
          <Hero />
        </div>
      </div>

      <div id='whoone' className='flex justify-center items-center'>
        <div className='w-full'>
          <h1 className='ml-10 my-10 text-orange-600 text-3xl'>{">"} who _</h1>
          {
            showcomp1 ? (
              <Moreme onclick={handletoggle} />
            ) : (
              <Aboutme onclick={handletoggle} />
            )
          }
        </div>
      </div>
      <div className='flex justify-center items-center mt-20'>
        <div className='w-full'>
          <h1 className='ml-10 my-10 text-orange-600 text-3xl'>{">"} Projects_</h1>
          <Project />
        </div>
      </div>

    </div>

  )
}

export default App
