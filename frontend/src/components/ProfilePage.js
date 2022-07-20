import { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import cropfacespace_bg from "./cropfacespace_bg.jpg"
// import facespace_bg from "./facespace_bg.jpg"


// const sharp = require('sharp');



const ProfilePage = () => {
    const {profileId} = useParams()
    const [currentProfiles, setCurrentProfiles] = useState(null);
    const [status, setStatus] =useState("loading");
    const {users} = useContext(UserContext);

    // let originalImage = 'facespace_bg.jpg';
    // let outputImage = 'croppedImage.jpg';
    // sharp(originalImage).extract({ width: 1920, height: 1080, left: 60, top: 40 }).toFile(outputImage)
    // .then(function(new_file_info) {
    //     console.log("Image cropped and saved");
    // })
    // .catch(function(err) {
    //     console.log("An error occured");
    // });

    useEffect(() => {
        fetch (`/api/users/${profileId}`)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            setCurrentProfiles(data.data)
            setStatus("idle")
        })
    },[])

if (!currentProfiles || !users ) return <div>loading</div>
console.log(users)

const myFriends = currentProfiles.friends.map((id) =>
users.find((user) => user.id===id)
)
console.log(myFriends)

    return (<div>
        <Nav>Facespace</Nav>
        {/* <BackgroundIm src={new_file_info}/> */}
        <BackgroundIm src={cropfacespace_bg}/>
        <ImgProfile src={currentProfiles.avatarUrl}></ImgProfile>
        <Name>{currentProfiles.name}</Name>
        <FriendsN>{currentProfiles.name}'s Friends</FriendsN>

        {myFriends.map((freind) =>{
            return <Img src={freind.avatarUrl}></Img>
        })}


    
    </div>)
}
const Nav = styled.p`
font-size:30px;
padding:10px;
background-color:darkorange;
color: white;
font-weight:bold;
font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
`;

const BackgroundIm = styled.img`
display:block;
width: 100%;
/* max-height: 45vh;
object-fit: cover; */
/* margin-top:-300px; */
`;

const ImgProfile = styled.img`

margin-left:17%;
margin-top:-10%;
width:20%;
border: 3px solid darkorange;
cursor: pointer;
`;

const Name = styled.p`
display:inline-block;
margin-left:10px;
color: darkorange;
font-weight: bold;
font-size: 30px;
`;

const FriendsN = styled.p`
margin-top:50px;
margin-left:10px;
color: darkorange;
font-weight: bold;
font-size: 30px;
border-bottom: 2px solid darkorange;
padding-bottom:5px;
`;




const Img = styled.img`
margin:3px;
width:20%;
border: 3px solid darkorange;
cursor: pointer;
margin-top:20px;
`;


export default ProfilePage