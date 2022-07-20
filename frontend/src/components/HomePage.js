import { useContext } from "react"
import { UserContext } from "./UserContext"
import styled from "styled-components"
import ProfilePage from "./ProfilePage"
import { Link } from "react-router-dom"

const HomePage = () => {
    const {
        users,
    } = useContext(UserContext)
    if (!users)
    return <div>loading</div>

    return (<div>
        <Nav>Facespace</Nav>
        <Div2>
        <Header>All Facespace members</Header>
        {users.map((user)=>{
            return <Div>
                <Link to = {`/profile/${user.id}`}><Img src={user.avatarUrl}></Img></Link>
            </Div>
        })}
        </Div2>
    </div>)
}

const Nav = styled.p`
font-size:30px;
padding:10px;
background-color:darkorange;
color: white;
margin-bottom:20px;
font-weight:bold;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Header = styled.p`
font-size:30px;
font-weight:bold;
color: darkorange;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Div = styled.div`
display:inline-block;
`;

const Div2 = styled.div`
margin-left:100px;
margin-right:100px;
`;

const Img = styled.img`
display:inline-block;
margin:3px;
width:120px;
border: 3px solid darkorange;
cursor: pointer;
:hover {
border: 5px solid darkorange;
transform: scale(0.97);
}
`;

export default HomePage