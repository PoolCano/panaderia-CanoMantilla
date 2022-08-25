import CartWidget from "./cartWidget";

const Navbar = () => {
    return(

        <nav style={{padding: '1px'}}>
        <a href="*" style={{padding: '20px'}}>Panes</a> 
        <a href="*" style={{padding: '20px'}}>Tortas</a> 
        <a href="*" style={{padding: '20px'}}>Bocaditos</a> 
        <CartWidget />
        </nav>
        
    )
}

export default Navbar;