import { ReactTyped } from "react-typed";

export default function Hero() {
  return (

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
  )
}
