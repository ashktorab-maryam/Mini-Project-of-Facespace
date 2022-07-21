import { useContext, useEffect, useState } from "react"
import { UserContext } from "./UserContext"
// import { useParams } from "react-router-dom"
import styled from "styled-components"
import facespace_bg from "./facespace_bg.jpg"
import { Link, useHistory } from "react-router-dom"



const SignInPage = () => {

    const history = useHistory();

    const [fname, setFname] = useState("")    
    const handleChange = e => {
        setFname(e.target.value)
    }  

    const {
        currentUser,
        setCurrentUser
    } = useContext(UserContext)


    
    const PostSignIn = (ev) => {
        ev.preventDefault()
        fetch("/api/signin", {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name : fname})}) //???
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setCurrentUser(data.data)
                sessionStorage.setItem('user', JSON.stringify(data.data));
                history.push("/")
            })
        }    

    return (<div>
        
        <BackgroundIm src={facespace_bg}/>
        <Div>
        <form onSubmit={PostSignIn}>
           
            <Input type="text" placeholder="Your first name" value={fname} onChange={handleChange} /><br></br>
        
        {/* <input type="text" placeholder="Your first name" name="fname" required></input>
        <button type="submit">Sign In</button>     */}
        <Button>Sign In</Button>
        </form>
        </Div>
       
    </div>)
}

const BackgroundIm = styled.img`
/* display:block; */
width: 100%;
max-height: 100vh;
background-color:rgba(204, 85, 0, 0.1);
`;

const Div = styled.div`
padding:50px;
height:30vh;
margin-left:50%;
display:block;
font-size:30px;
background-color:rgba(204, 85, 0, 0.3);
font-weight:bold;
position:absolute;
text-align:center;
bottom:0;
left:0;
padding-bottom:10px;
`;
const Button = styled.button`
width: 100%;
max-height: 100vh;
background-color:#cc5500;
padding:5px;
color:white;
border:none;
`;

const Input = styled.input`
padding:5px;
width: 100%;
max-height: 100vh;
border:none;
`;



export default SignInPage