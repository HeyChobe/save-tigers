import styled from 'styled-components'
import {Link} from "react-router-dom";
import React from 'react';

const Container = styled.div`
    height: 10vh;
    width: 100%;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid white;

    .nav-options{
        width: 55%;
        min-width: 50%;
        margin: auto;
        padding: 0;
        height: 100%;
        font-weight: 300;
        display: flex;
        justify-content: space-around;
        align-items: center;

        a{
            font-size: 25px;
            cursor: pointer;
            color: white;
            text-decoration: none;
        }
    }
`

function NavBar(){
    return(
        <Container>
            <ul className="nav-options">
                <Link to="/home">HOME</Link>
                <Link to="/donate">DONATE</Link>
                <Link to="/contact-us">CONTACT US</Link>
            </ul>  
        </Container>
    )
}

export default NavBar;