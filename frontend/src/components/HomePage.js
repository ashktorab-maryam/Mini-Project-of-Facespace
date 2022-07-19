import { useContext } from "react"
import { UserContext } from "./UserContext"
import styled from "styled-components"

const HomePage = () => {
    const {
        users,
    } = useContext(UserContext)
    if (!users)
    return <div>loading</div>

    return (<div>
        <Nav>Facespace</Nav>
        <Header>All Facespace members</Header>
        {users.map((user)=>{
            return <Div>
                
                <Img src={user.avatarUrl}></Img>
            </Div>
        })}
    </div>)
}

const Nav = styled.p`
font-size:30px;
padding:10px;
background-color:darkorange;
color: white;
margin-bottom:20px;
`;

const Header = styled.p`
font-size:30px;
color: darkorange;
/* margin-left:100px; */
`;

const Div = styled.div`
display:inline-block;
`;

const Img = styled.img`
display:inline-block;
margin:3px;
width:150px;
border: 1px solid orange;
cursor: pointer;
:hover {
border: 5px solid orange;
transform: scale(0.97);
}
`;

export default HomePage