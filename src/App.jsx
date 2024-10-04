import Link from "../src/styledLink"

function App() {
  return (
    <div className="bg-[#1b1f25] min-h-screen flex items-center justify-center">
      <div className="w-[80%] sm:w-full max-w-[400px] rounded-xl bg-[#262d35] p-10 flex flex-col items-center gap-4">
        <img className="rounded-full w-24 aspect-square" src="/assets/foto.jpg"></img>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#EBEBEB]">Ikhsan Ramadhanu</h1>
          <p className="text-[#51a38a] font-medium">Jakarta, Indonesia</p>
        </div>
        <p className="text-gray-300 text-center text-sm my-[8px]">"Just a normal person with high curiousity💡"</p>
        <div className="flex flex-col gap-4 w-full">
          <Link link="https://www.instagram.com/ikhsanfathirizkyr/" text="Instagram" />
          <Link link="https://www.linkedin.com/in/ikhsan-ramadhanu-6369202a9/" text="LinkedIn" />
          <Link link="https://github.com/IkhsanRamadhanu" text="Github" />
          <Link link="mailto:ikhsanfathirizkyr@gmail.com" text="Email" />
          <Link link="https://ikhsanramadhanu.github.io/Personal-Website/" text="Website" />
        </div>
      </div>
    </div>
  )
}

export default App
