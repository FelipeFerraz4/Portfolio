import { styled } from 'styled-components';
import brand from '../../../../assets/brand.png';

const FigureContainer = styled.figure`
    img {
        width: 80px;
    }

    a {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;


function Logo () {
    return(
        <FigureContainer>
            <a href="#">
                <img src={brand} alt="BlueFox's logo" />
                <h3>Blue Fox</h3>
            </a>
        </FigureContainer>
    )
}

export default Logo;