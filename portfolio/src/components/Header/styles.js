import { styled } from 'styled-components';

const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    nav ul {
        padding: 0px;
        display: inline-flex;
        list-style: none;
        gap: 20px;
    }

    nav ul li div {
        display: none;
    }

    nav ul li:hover div{
        padding: 0px;
        display: block;
        position: absolute;
        /* margin-left: -38px; */

        ul {
            display: block;

            li {
                /* width: 150px; */
                padding: 5px;
                text-align: left;
                border-radius: 10px;
                transition: 0.7s;
            }
        }
    }
`; 

export default HeaderContainer;