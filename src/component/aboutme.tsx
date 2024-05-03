import Image1 from '../assets/image/image 1.png'

export default function Aboutme() {
  return (
    <div className=" relative w-3/6 h-4/6 flex items-center justify-center">
      <div className=" absolute border-2 top-0 left-0 w-1/6 h-1/6 border-r-0 border-b-0"></div>
      <div className=" absolute border-2 top-0 right-0 w-1/6 h-1/6 border-l-0 border-b-0"></div>
      <div className=" absolute border-2 bottom-0 left-0 w-1/6 h-1/6 border-r-0 border-t-0"></div>
      <div className=" absolute border-2 bottom-0 right-0 w-1/6 h-1/6 border-l-0 border-t-0"></div>
      <div>
        <img src={Image1} />
      </div>
    </div>
  )
}

