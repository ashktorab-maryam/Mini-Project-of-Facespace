import { useContext } from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";
import { UserContext } from "./UserContext";

const Header= ()=>{
    const {currentUser}= useContext(UserContext)
    return(
        <>
        <div>
            <StyleP>Facespace</StyleP>
            <Div>
            {currentUser? <p>Howdy, {currentUser.name}</p> :
            <StyledLink to={"/signin"}>Sign in</StyledLink> 
            }
            </Div>
        </div>
        </>
    )
}
const StyleP = styled.p`
font-size:35px;
padding:10px;
background-color:#cc5500;
/* float: left; */
text-decoration: none;
color: white;
padding-right:50px;
font-family:'Teko', sans-serif;
`;

const Div = styled.div`
font-family:'Teko', sans-serif;
font-size:35px;
padding:10px;
background-color:#cc5500;
float: right;
text-decoration: none;
color: white;
padding-right:50px;
margin-top:-55px;
`;

const StyledLink  = styled(Link)`
text-decoration: none;
color: white;
`;

export default Header;