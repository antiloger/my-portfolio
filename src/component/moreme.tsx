
export default function Moreme() {

  return (
    <div className=" relative w-full lg:h-5/6 md:h-5/6 mx-10 p-10 flex flex-col items-center justify-center">

      <div className=" absolute border-2 top-0 left-0 w-20 h-20 border-r-0 border-b-0 rounded-tl-xl"></div>
      <div className=" absolute border-2 top-0 right-0 w-20 h-20 border-l-0 border-b-0 rounded-tr-xl"></div>
      <div className=" absolute border-2 bottom-0 left-0 w-20 h-20 border-r-0 border-t-0 rounded-bl-xl"></div>
      <div className=" absolute border-2 bottom-0 right-0 w-20 h-20 border-l-0 border-t-0 rounded-br-xl"></div>
        <div className="flex felx-col md:flex-row w-full ">
            <div className="flex flex-col  w-1/2 " >
                <div className="flex border-1 text-xs">
                    name:
                </div>
                <div className="flex border-2">
                    kn piyumian
                </div>
            </div>
            <div className="flex flex-col w-1/2 " >
                <div className="flex border-1 text-xs">
                    age:
                </div>
                <div className="flex border-2">
                    22
                </div>
            </div>
            <div className="flex flex-col w-1/2 " >
                <div className="flex border-1 text-xs">
                    country:
                </div>
                <div className="flex border-2">
                    sri lanka
                </div>
            </div>
        </div>
        <div className="flex felx-col md:flex-row w-full ">
            <div className="flex  w-1/2" >name: K.Name</div>
            <div className="flex w-1/2" >age: 22</div>
        </div>
    </div>
  )
}