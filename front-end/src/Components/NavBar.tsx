import { Link } from "react-router-dom";
import logo from "../images/codefuse-logo.png"
import { AiOutlineBell } from 'react-icons/ai';
const NavBar = () => {
  const navigation = [
    { name: "Dashboard", href: "/", current: true },
    { name: "Interview", href: "#", current: false },
    { name: "Progress", href: "#", current: false },
    { name: "Study Material", href: "#", current: false },
    { name: "Ask your Doubts", href: "#", current: false },
  ];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="flex justify-between items-center border-black shadow-md" >
      {/* logo */}
      <div className="flex flex-shrink-0 items-center justify-center w-20 overflow-hidden relative"  >
        <Link to={"/"}>
          <img className="h-full overflow-hidden relative" src={logo} alt="logo" />
        </Link>
      </div>
      <div className=" border border-solid hidden sm:ml-6 sm:block">
        <div className="flex space-x-4">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href ?? "/"}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-black hover:bg-gray-700 hover:text-white",
                "rounded-md px-3 py-2 text-sm font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-around items-center">
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button
            type="button"
            className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span className="absolute -inset-1.5" />
            <span className="sr-only">View notifications</span>
            <AiOutlineBell className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex flex-shrink-0 items-center justify-center w-20 overflow-hidden relative">
          <img className="h-full overflow-hidden relative w-10" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
        </div>
      </div>

    </div >
  )
}
export default NavBar;