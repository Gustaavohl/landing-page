import styled from "styled-components"
import { Images } from "../../../Assets";

export const Container = styled.div`
height:70vh;
width: 100%;
left: 0px;
top: 0px;

background-image: url(${Images.Img});
background-size: contain;
;
color:#ffffff;

.click{
    display:flex;
    justify-content: space-between;
    align-items: center;
      
}

h1{
    display:flex;
    justify-content: center;
    height: 10%;
    margin-top: 50px;
    font-family: montserrat;
    font-size: 72;
}

p{
    display: flex;  
    justify-content: center;
    text-align: center;
    font-family: raleway;
    height: 20%;
    align-items: center;
    
    
}
`;
export const ButtonContainer = styled.div`

display:flex;
align-items: center;


button{
    display:flex;
    align-items: center;
    justify-content: center;
    margin:18px;
    font-size: 20px;
    border-radius:8px;
    padding: 15px;
}
`;
export const ButtonMainContainer = styled.div`

width: 100%;
display:flex;
align-items: center;
justify-content: center;
gap: 30px;
margin:15px;


button{
    width:150px;
    max-inline-size: -webkit-fill-available;
    font-size: 20px;
    border-radius:5px;

    
    
}
`;