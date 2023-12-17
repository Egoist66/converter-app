import headerStyles from "./header.module.scss"

const Header = ({children}) => {
    return (

        <header className={headerStyles.header}>
            {children}
        </header>
    )
}

export default Header