import { FaSearch } from "react-icons/fa";
import imgOne from '../assets/wordweaverlogo4.png'
import menu from '../assets/menu2.png'
import { CiMenuBurger } from "react-icons/ci";
export default function App(){
  return(
    <>
  {/* Hello world */}
  <div className="nav" style={{ width: "100vw" }}>
    {/*above is for menu*/}
    <div className="hyperlink">
      <img src={menu} alt="" srcset="" className="menu"/>
      <a>Gallery</a>
      <a>Dashboard</a>
    </div>
    <div className="logos">
      <div className="logo" style={{ marginRight: "19vw" }}>
        <a>
          <img src={imgOne} alt="" id="logo" />
        </a>
      </div>
      {/*above is for hyperlink*/}
      <div className="logo">
        <div className="sicon">
        <FaSearch />
          <input type="text" placeholder="SEARCH" />
        </div>
      </div>
      <div className="buttons">
        <div>
          <a style={{ fontWeight: "bolder" }}>
            <button id="buttons1"> SIGN UP</button>
          </a>
        </div>
        <div>
          <a style={{ fontWeight: "bolder" }}>
            <button id="buttons2">SIGN IN</button>
          </a>
        </div>
      </div>
    </div>
    {/*above is for logo*/}
    {/*above is for signup login*/}
  </div>
</>
  )
}