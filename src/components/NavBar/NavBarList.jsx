import {NavLink} from "react-router-dom";

import uuid from "react-uuid"

import NavBarStyles from "./navbar.module.scss"

const NavBarList = ({routes}) => {

    return (
        <ul className={NavBarStyles.navList}>

            {routes.map((route, i) => {
                return (
                    <li key={uuid()}>
                        <NavLink aria-current={route.name} className={NavBarStyles.navLink} to={route.path}>{route.name}</NavLink>
                    </li>
                )
            })}


        </ul>
    )
}

export default NavBarList