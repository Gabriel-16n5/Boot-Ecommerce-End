import styled from "styled-components"
import { white, darkgray ,green} from "../../constants/colors"


export const ContainerMain = styled.div`
width:100vw;
display:flex;
flex-direction:column;
align-items:center;
overflow:hidden;
`
export const Divtop = styled.div`
width:100vw;
background-color:${darkgray};
padding:10px;
height:50px;
display:flex;
align-items:center;
justify-content:space-between;
margin-bottom:40px;
h1 {
    color:${white};
    font-size:13px;
    background-color:${darkgray};
}
`
export const Divmenu = styled.div`
width:90vw;
display:flex;
flex-direction:column;
align-items:center;
color:${white};
margin-bottom:40px;
a{
    font-size:14px;
    color:${white};
    font-weight:400;
    margin-bottom:20px;
}
h2{
    font-size:24px;
    margin-bottom:30px;

}
p{
    font-size:16px;
    margin-bottom:50px;
}
input::placeholder{
    color:${white};
    opacity:0.6;
    
    }
input{
    color:${white};
}
div{
    width:90vw;
    display:flex;
    padding-left:15px;
    input{
        width:18px;
        height:18px;
        margin-right:12px;
    }
}
`
export const Button = styled.button`
color:${white};
font-size:15px;
font-weight:500;
`

export const Register = styled.button`
color:${white};
font-size:15px;
font-weight:500;
background-color:${green};
`

