import Container from "../Container/Container";
import FooterStyle from "./footer.module.scss"

const Footer = () => {
    return (
        <footer className={FooterStyle.footer}>

            <FooterNavBar>

                <Container></Container>


            </FooterNavBar>

        </footer>
    )
}

const FooterNavBar = ({children}) => {
    return (
        <nav className="footer-nav">

            {children}

        </nav>
    )
}

export default Footer