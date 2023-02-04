export default function Navbar() {
  return (
    <nav className="bg-[#21222A] h-24 w-full flex justify-between ">
      <div className="flex pt-8 pl-7">
        <img src="./../../logo192.png" alt="logo" className="w-7 h-7 mr-2" />
        <h1 className="w-40 h-7 font-bold font-inter text-2xl text-[#61DAFB]">
          ReactFacts
        </h1>
      </div>
      <h1 className="text-[#DEEBF8] pt-[38px] pr-7">
        React Course - Project 1
      </h1>
    </nav>
  );
}
