import styled from "styled-components";
//import {Images} from"../../../Assets";

export const Container = styled.div`
.elemento1{
    
    position: absolute;
    width: 460px;
    //height: 500px;
    left:250px;
    margin-top: 100px;
}
.elemento2{

    position: absolute;
    width: 460px;
    //height: 440px;
    left:190px;
    margin-top: 45px;
}
.elemento3{
    position: absolute;
    width: 29px;
   // height: 200px;
    left: 50px;
    top: 890px;
}

`;


export const ImgContainer = styled.div`

display: flex;
justify-content: center;


.text{
    
    margin-left: 700px;
    margin-top:100px;
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    
}

`;
export const ButtonMainBody = styled.div`

margin: 60px 0px;

position: static;
width: 199px;
height: 60px;
left: 0px;
top: 276px;




button{
    font-family: montserrat;
    font-size: 16px;
    box-shadow:0 10px 30px rgba(56, 29, 219, 0.3);
    border-radius: 8px;

    &:hover{
        
    }
}
`;
export const TextContainer = styled.div`


height: 1000px;
width: 470px;
left: 0px;
//top: 76px;
h1{
    
font-family: Montserrat;
font-size: 34px;
font-style: normal;
font-weight: 700;
line-height: 44px;
letter-spacing: 0em;
text-align: left;
}


`;