import { styled } from 'styled-components';

import colors from '../../styles/color';

export const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 5%;

    nav {
        display: none;
    }

    nav ul {
        padding: 0px;
        display: inline-flex;
        list-style: none;
        gap: 20px;
    }

    nav ul li div {
        display: none;
    }

    nav ul li:hover div {
        padding: 0px;
        display: block;
        position: absolute;

        ul {
            display: block;

            li {
                padding: 5px;
                text-align: left;
                border-radius: 10px;
                transition: 0.7s;
            }
        }
    }

    button {
        width: 40px;
        height: 40px;
        border: 0px;
        background-color: ${colors.secundary};
        margin-right: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        & > div {
            width: 100%;
            height: 2px;
            background-color: ${colors.primary};
        }
    }

    @media screen and (min-width: 700px) {
        button {
            display: none;
        }
        nav {
            display: inline;
        }
    }
`; 

export const Sidebar = styled.div`
    div {
        position: absolute;
        background-color: cornflowerblue;
        width: 300px;
        height: 100vh;
        right: 0px;
    }
`;

