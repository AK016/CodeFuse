import logo from "../images/codefuse.png"
const Footer=()=>{
    return(
        <>
            <footer style = {{ boxShadow : "rgba(0, 0, 0, 0.1) 0px 0px 5px 0px, rgba(0, 0, 0, 0.1) 0px 0px 1px 0px" }}>
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className=" grid grid-cols-1 lg:grid-cols-3 ">
            <div className = "relative flex justify-center" >
              <img src={logo} className="sm:h-9 absolute" alt="logo" style={{width : "60%", height : "100%"}}  />
            </div>
            <div className="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="font-medium">Company</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    About{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Meet the Team{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    History{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Careers{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Services</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    1on1 Coaching{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Company Review{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Accounts Review{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    HR Consulting{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    SEO Optimisation{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Help</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Contact{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    FAQs{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Live Chat{" "}
                  </a>
                </nav>
              </div>
              <div>
                <p className="font-medium">Legal</p>
                <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Privacy Policy{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Terms &amp; Conditions{" "}
                  </a>
                  <a className="hover:opacity-75" href="/#">
                    {" "}
                    Accessibility{" "}
                  </a>
                </nav>
              </div>
            </div>
          </div>
          <p className="mt-8 text-xs text-gray-800">© 2023 CodeFuse</p>
        </div>
      </footer>
        </>
    )
}
export default Footer;