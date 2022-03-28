import {Container} from './style'


const Button = ({ title, onClick, img, background, color, type }) => {
  return (
    <Container background={background} color={color}>
      <button type={type} onClick={onClick}>
        <img src={img} alt="" />
        {title}
      </button>
    </Container>
  );
};

export default Button;
