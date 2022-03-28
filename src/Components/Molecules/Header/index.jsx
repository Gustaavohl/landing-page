import {ButtonContainer,ButtonMainContainer ,Container} from "./style";
import Button from "../../Atomics/Button";
import { Icons } from "../../../Assets";
import { COLORS } from "../../../common/Colors";

export const Header = () => {
    return(
        <div>
        <Container>
            <div className="click"> 
                <img src={Icons.Logo} alt="logo icone" />
                <ButtonContainer>
                     <Button background="none" title='HOME'/>
                     <Button background="none" title='SCHEDULE'/>
                     <Button background="none" title='CONTACT US'/>
                     <Button background={COLORS.White} color={COLORS.Blue}  title='GET TICKETS'/>
                </ButtonContainer>
            </div>
          <h1> Eventos </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspendisse vitae ligula <br />
               placerat, eleifend ex non, 
              vehicula libero. Suspendisse eget tellus lectus.</p> 
            <ButtonMainContainer>
                    <Button background={COLORS.Red} title='Get Started'/>
                    <img src={Icons.Vector} alt="play"/>
                    <Button background="none" color={COLORS.white} title='Watch Vídeo'/>
          </ButtonMainContainer>    
        </Container>
        </div>
    )
};

//export default Header