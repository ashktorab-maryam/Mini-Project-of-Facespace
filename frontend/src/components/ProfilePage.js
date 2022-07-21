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
        {/* <BackgroundIm src={new_file_info}/> */}
        <BackgroundIm src={cropfacespace_bg}/>
        <ImgProfile src={currentProfiles.avatarUrl}></ImgProfile>
        <Name>{currentProfiles.name}</Name>
        <FriendsN>{currentProfiles.name}'s Friends</FriendsN>

        {myFriends.map((freind) =>{
            return <Div>

                <Img src={freind.avatarUrl}></Img>
                <SpanStyle>{freind.name}</SpanStyle>
                </Div>
            })}


    
    </div>)
}

const BackgroundIm = styled.img`
display:block;
width: 100%;
/* max-height: 45vh;
object-fit: cover;  */
`;

const ImgProfile = styled.img`

margin-left:17%;
margin-top:-10%;
width:20%;
border: 3px solid #cc5500;
cursor: pointer;
`;

const Name = styled.p`
display:inline-block;
margin-left:10px;
color: #cc5500;
font-weight: bold;
font-size: 30px;
`;

const FriendsN = styled.p`
margin-top:50px;
margin-left:10px;
color: #cc5500;
font-weight: bold;
font-size: 30px;
border-bottom: 2px solid #cc5500;
padding-bottom:5px;
`;

const Img = styled.img`
/* margin:3px; */
width:100%;
border: 3px solid #cc5500;
/* cursor: pointer; */
/* margin-top:20px; */

`;

const SpanStyle = styled.span`
width:100%;
font-size:30px;
background-color:rgba(204, 85, 0, 0.3);
font-weight:bold;
position:absolute;
text-align:center;
bottom:0;
left:0;
padding-bottom:10px;

`;
const Div = styled.div`
display:inline-block;
padding:5px;
width:20%;
position:relative;
`;




export default ProfilePage