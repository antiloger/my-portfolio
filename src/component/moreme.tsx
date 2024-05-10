import { useState } from "react"


export default function Moreme({ onclick }: { onclick: () => void }) {

  const [isbtn1, setbtn1] = useState(false);
  const [isbtn2, setbtn2] = useState(false);
  const [isbtn3, setbtn3] = useState(false);

  const setbtnvisibillity1 = () => {
    setbtn1(!isbtn1)
  };
  const setbtnvisibillity2 = () => {
    setbtn2(!isbtn2)
  };
  const setbtnvisibillity3 = () => {
    setbtn3(!isbtn3)
  };


  return (
    <section id="who" className="who">
      <div className=" relative  mx-10 p-10  ">

        <div className=" absolute border-2 top-0 left-0 w-20 h-20 border-r-0 border-b-0 rounded-tl-xl"></div>
        <div className=" absolute border-2 top-0 right-0 w-20 h-20 border-l-0 border-b-0 rounded-tr-xl"></div>
        <div className=" absolute border-2 bottom-0 left-0 w-20 h-20 border-r-0 border-t-0 rounded-bl-xl"></div>
        <div className=" absolute border-2 bottom-0 right-0 w-20 h-20 border-l-0 border-t-0 rounded-br-xl"></div>
        <div className="flex flex-col ">
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col w-full sm:w-1/2 mb-6">
              <p className="text-sm text-orange-600">name:</p>
              <p className="">K.N Piyumina</p>
            </div>
            <div className="flex w-full sm:w-1/2 flex-col mb-6" >
              <p className="text-sm text-orange-600">age:</p>
              <p className="">22</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col w-full sm:w-1/2 mb-6">
              <p className="text-sm text-orange-600">country:</p>
              <p className="">Sri Lanka</p>
            </div>
            <div className="flex w-full sm:w-1/2 flex-col mb-6" >
              <p className="text-sm text-orange-600">degree:</p>
              <p className="">Bsc(Hons).Computer science<span className="text-sm text-gray-800">(plymouth university)</span></p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col w-full sm:w-1/2 mb-6">
              <p className="text-sm text-orange-600">language:</p>
              <p className="">Go, Rust, Python, TS/JS</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row">
            <div className="flex flex-col w-full sm:w-1/2 mb-6">
              <p className="text-sm text-orange-600">skills:</p>
              <button onClick={setbtnvisibillity1} className="inline-flex text-left hover:underline">
                {">"} Web Development
              </button>
              {isbtn1 &&
                <div className="flex flex-col text-xs text-green-600 py-5 ml-10">
                  <p className="mb-2"> {"> "}<span>Frontend</span>: React </p>
                  <p className="mb-2"> {"> "}<span>Backend</span>: Golang, Django, Laravel, Fast api, Axum </p>
                  <p> {"> "}tech: Redis, Docker,</p>
                </div>
              }
              <button onClick={setbtnvisibillity2} className="inline-flex text-left hover:underline">
                {">"} System Application Development
              </button>
              {isbtn2 &&
                <div className="flex">
                  front
                </div>
              }
              <button onClick={setbtnvisibillity3} className="inline-flex text-left hover:underline">
                {">"} ML / AI
              </button>
              {isbtn3 &&
                <div >
                  frontend -{">"}react
                </div>
              }
            </div>
          </div>
        </div>
        <button onClick={onclick} className="text-orange-800 hover:text-orange-200 hover:underline">{">"} more</button>
      </div>
    </section>
  )
}
