
const Navbar = () => {
  return (
    <nav className="bg-indigo-800">
      <div className="flex items-center w-[70vw] m-auto justify-between text-white">

        <div className="font-bold text-[30px]">iTasks</div>

        <ul className="flex gap-8">
          <li className="cursor-pointer hover:scale-110">Home</li>
          <li className="cursor-pointer hover:scale-110">Your Task</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
