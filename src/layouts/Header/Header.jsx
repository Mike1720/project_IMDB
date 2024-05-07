import { NavLink } from "react-router-dom"
import "./header.css";

export const Header = () => {

   const linkIsActive = (isActive) => {
      return isActive ? 'header__item-link header__item-link--is--active' : 'header__item-link'
   }
   
   return (
      <header>
         <nav className={"navbar bg-dark"}>
            <div className={"container mx-2 d-flex align-items-center"}>
               
               <NavLink
                  className="navbar-brand text-light d-flex column-gap-3"
                  to={"/"}
               >
                  <p>React Project</p>
                  <img src="../../src/assets/react.svg" alt="Spotify-logo" width="30" height="30" className="d-inline-block align-text-top" />
               </NavLink>

               <ul className="d-flex flex-wrap gap-3 align-items-center">
                  <li>
                     <NavLink
                        className={({ isActive }) => linkIsActive(isActive)}
                        to={"/"}
                     >
                        Home
                     </NavLink>
                  </li>
                  <li>
                     <NavLink
                        to={"/search"}
                        className={({ isActive }) => linkIsActive(isActive)}
                     >
                        Buscar cancion
                     </NavLink>
                  </li>
               </ul>
            </div>
         </nav>
      </header>
   )
}
