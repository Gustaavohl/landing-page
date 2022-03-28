import { Images } from "../../../Assets";
import {Container, ImgContainer, TextContainer } from "./style";
import Button from "../../Atomics/Button";
import {COLORS} from "../../../common/Colors";
import {ButtonMainBody} from "./style"
export const Body = () =>{
    return(
        <Container>
            <ImgContainer>
                <div className="elemento2">
                <img src={Images.Two} alt="Imagem de fundo" />
                </div>
                <div className="elemento1">
                 <img src={Images.Party} alt="Imagem" /> 
                </div>
                <div className="elemento3">
                    <img src={Images.New} alt="confetti" />
                </div>

                <div className="text">
                     <h1>About Musik</h1>
Fusce justo mi, vehicula id arcu et, dapibus tristique lectus. Vivamus a elit < br />
 sodales, tincidunt nunc non, maximus lacus. Fusce a augue sed dolor auctor < br /> 
 iaculis vitae id mauris. Integer ut lectus non neque suscipit luctus. Mauris et < br />
 erat id ipsum condimentum cursus. Sed tempus enim non massa mattis < br /> 
 iaculis. In quis massa risus. 
            <ButtonMainBody>
                <Button background={COLORS.Blue} color={COLORS.White} title='Learn More'/>
            </ButtonMainBody>              
                </div>
            </ImgContainer>
                <TextContainer> 
                    <div className="text"> 
                    
                    <h1>Singers</h1>
                    <p>Fusce justo mi, vehicula id arcu et, dapibus tristique lectus.<br />
                     Vivamus a elit sodales, tincidunt nunc non, maximus lacus.<br />
                     Fusce a augue sed dolor auctor iaculis vitae id mauris. Integer <br />
                     ut lectus non neque suscipit luctus. Mauris et erat id ipsum <br /> 
                     condimentum cursus. Sed tempus enim non massa mattis <br /> 
                     iaculis. In quis massa risus</p>
                    </div>
                    
                </TextContainer>
        </Container>
    )
}