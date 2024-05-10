import Image1 from '../assets/image/image 1.png'

export default function Aboutme({ onclick }: { onclick: () => void }) {

  return (
    <section className='who w-full'>
      <div className=" relative   mx-10 p-10 flex flex-col md:flex-row items-center justify-center">

        <div className=" absolute border-2 top-0 left-0 w-20 h-20 border-r-0 border-b-0 rounded-tl-xl"></div>
        <div className=" absolute border-2 top-0 right-0 w-20 h-20 border-l-0 border-b-0 rounded-tr-xl"></div>
        <div className=" absolute border-2 bottom-0 left-0 w-20 h-20 border-r-0 border-t-0 rounded-bl-xl"></div>
        <div className=" absolute border-2 bottom-0 right-0 w-20 h-20 border-l-0 border-t-0 rounded-br-xl"></div>

        <div className='w-1/3 m-5 aspect-auto flex items-center justify-center '>
          <img src={Image1} />
        </div>
        <div className='w-2/3 '>
          <div className='flex aspect-auto  items-center justify-center' >
            <div className='text-sm sm:pr-0'>
              <p>
                You're a creative and adventurous soul with a passion for exploration and discovery. Whether
                it's traveling to far-flung corners of the globe, diving into new hobbies, or immersing yourself
                in different cultures, you thrive on new experiences. Your curious nature drives you to
                constantly seek out new knowledge and perspectives, making you a fascinating conversationalist
                and an inspiring presence in your social circles. You have a knack for storytelling and sharing
                your adventures, captivating others with your vivid descriptions and infectious enthusiasm.
                Your open-mindedness and thirst for life make you someone people love to be around, always
                ready for the next adventure that awaits.

                You're a creative and adventurous soul with a passion for exploration and discovery. Whether
                it's traveling to far-flung corners of the globe, diving into new hobbies, or immersing yourself
                in different cultures, you thrive on new experiences. Your curious nature drives you to

              </p><br />
              <button onClick={onclick} className=' text-orange-600 hover:underline'> {">"} more</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


// <p className='text-sm sm:text-sm'>
//   {details.map(([key, value], index) => (
//     <h1>
//       <span key={index}>
//         <span style={{ color: 'green' }}>{key}:</span>{' '}
//         <span style={{ color: 'orange' }}>{formatValue(value)}</span>{'\n'}
//       </span>
//       <br />
//       <br />
//     </h1>
//   ))}
// </p>


// <p className=''><span className=' text-orange-600'>name</span>: <span className=' text-green-600'>K.N Piyumina</span></p><br/>
// <p className=''><span className=' text-orange-600'>age</span>: <span className=' text-green-600'>22</span></p><br/>
// <p className=''><span className=' text-orange-600'>country</span>: <span className=' text-green-600'>Srilanka</span></p><br/>
// <p className=''><span className=' text-orange-600'>language stack</span>: {"["}</p>
// <p style={{ whiteSpace: "pre-wrap"}}>      <span className=' text-green-600'>Go</span>, <span className=' text-green-600'>Rust</span>, <span className=' text-green-600'>Python</span>, <span className=' text-green-600'>JS/TS</span></p>
// <p>{"]"}</p><br/>
// <p className=''><span className=' text-orange-600'>dev</span>: {"["}</p>
// <p style={{ whiteSpace: "pre-wrap"}}>      <span className=' text-green-600'>backend developer</span>,</p>
// <p>{"]"}</p><br/>
// <p className=''><span className=' text-orange-600'>skills</span>: {"["}</p>
// <p style={{ whiteSpace: "pre-wrap"}}>      <span className=' text-green-600'>System level Programming</span>,</p>
// <p style={{ whiteSpace: "pre-wrap"}}>      <span className=' text-green-600'>ML / AI</span>,</p>
// <p style={{ whiteSpace: "pre-wrap"}}>      <span className=' text-green-600'>Game development</span>,</p>
// <p>{"]"}</p><br/>
// <br/>
