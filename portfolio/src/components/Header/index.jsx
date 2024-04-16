import { useState } from 'react';
import Logo from './components/Logo';
import Navbar from './components/Navbar';
import { HeaderContainer, Sidebar } from './styles';

function Header () {
    const [sideBar, setSideBar] = useState(false);

    function handleOffCanvas() {
        setSideBar(true)
    }

    return (
        <HeaderContainer>
            <Logo />
            <Navbar />
            {(!sideBar) && <button onClick={handleOffCanvas}>
                <div></div>
                <div></div>
                <div></div>
            </button>}
            {(sideBar) && <Sidebar>
                {/* <Navbar /> */}
            </Sidebar>}
        </HeaderContainer>
    )
}

export default Header;