import { StyledButton } from './Button.styled';

const Button = ({ type, text, onClick, styled, disabled }) => {
  console.log(styled);
  return (
    // <button type={type} onClick={onClick} style={styled} diabled={disabled}>{text}</button>
    <StyledButton
      type={type}
      onClick={onClick}
      width={styled.width}
      height={styled.height}
      ft_size={styled.ft_size}
      pd={styled.pd}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
