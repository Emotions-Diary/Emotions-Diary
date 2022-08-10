import { StyledButton } from './Button.styled';

const Button = ({ type, text, onClick, styled, disabled }) => {
  return (
    <StyledButton
      type={type}
      onClick={onClick}
      width={styled.width}
      height={styled.height}
      ft_size={styled.ft_size}
      pd={styled.pd}
      bg_color={styled.bg_color}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
