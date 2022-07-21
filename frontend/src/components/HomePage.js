import { useContext } from "react"
import { UserContext } from "./UserContext"
import styled from "styled-components"
import ProfilePage from "./ProfilePage"
import { Link } from "react-router-dom"

const HomePage = () => {
    const {
        users,currentUser
    } = useContext(UserContext)
    if (!users)
    return <div>loading</div>


    return (<div>
        <Div2>
        <Header>All Facespace members</Header>
        {users.map((user)=>{
            return <Div>
                <Link to = {`/profile/${user.id}`}>
                    <Div3>
                    <Img src={user.avatarUrl}/>
                    {currentUser && currentUser.friends.includes(user.id) && <FriendsStyle>friend</FriendsStyle>}
                    </Div3>
                </Link>
            </Div>
        })}
        </Div2>
    </div>)
}

// const Nav = styled.p`
// font-size:30px;
// padding:10px;
// padding-left:30px;
// background-color:#cc5500;
// color: white;
// margin-bottom:20px;
// font-weight:bold;
// font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
// `;

const Header = styled.p`
margin-top:20px;
margin-bottom:10px;
font-size:30px;
font-weight:bold;
color: #cc5500;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const Div = styled.div`
display:inline-block;
`;

const Div2 = styled.div`
margin-left:100px;
margin-right:100px;
`;
const Div3 = styled.div`
  text-transform: uppercase;
  text-align: center;
  line-height: 25px;
  transform: rotate(0deg); 

  /* /* -webkit-transform: rotate(45deg); */
  /* width: 115px;
  display: block;
  background: #f5431a;
  box-shadow: 0 0 10px 3px #ff6e4e; */
  /* position: absolute; */
  top: 20px;
  right: -25px;
`;

const Img = styled.img`
display:inline-block;
margin:3px;
width:120px;
border: 3px solid #cc5500;
cursor: pointer;
:hover {
border: 5px solid #cc5500;
transform: scale(0.97);
}
`;

const StyledLink  = styled(Link)`
float: right;
text-decoration: none;
color: white;
padding-right:50px;
`;


const FriendsStyle  = styled.p`
  text-transform: uppercase;
  text-align: center;
  line-height: 25px;
  transform: rotate(45deg);
  -webkit-transform: rotate(45deg);
  width: 115px;
  display: block;
  background: #f5431a;
  box-shadow: 0 0 10px 3px #ff6e4e;
  position: absolute;
  top: 20px; right: -25px;
`;

export default HomePage