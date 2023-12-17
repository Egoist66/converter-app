import Container from "../Container/Container"
import NavBarList from "./NavBarList"
import NavBarStyles from "./navbar.module.scss"

const NavBar = ({routes}) => {

    return (
        
        <Container classname="header-container">

            <nav className={NavBarStyles.navigation}>

                <NavBarList  routes={routes} />


            </nav>



        </Container>
    )
}

export default NavBar