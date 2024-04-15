import Logo from './components/Logo';
import HeaderContainer from './styles';

function Header () {
    return (
        <HeaderContainer>
            <Logo />
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li>
                        <a href="">Sobre mim</a>
                        <div className=''>
                            <ul>
                                <li><a href="">Descrição</a></li>
                                <li><a href="">Contatos</a></li>
                                <li><a href="">Habilidades</a></li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="">Projetos</a></li>
                    <li>
                        <a href="">Atividades extras</a>
                        <div className=''>
                            <ul>
                                <li><a href="">Plataformas de treinamento de algoritmos</a></li>
                                <li><a href="">Voluntariado</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header;