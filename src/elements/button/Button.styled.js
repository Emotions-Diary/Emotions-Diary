import styled from 'styled-components';
import '../../static/fonts/fonts.css';

export const StyledButton = styled.button`
  font-family: 'Cafe24Ssurround';
  background-color: ${(props) => (props.bg_color ? props.bg_color : '#e66a2f')};
  border-radius: 10px;
  border: none;
  color: #f7f6f1;
  width: ${(props) => (props.width ? props.width : '132px')};
  height: ${(props) => (props.height ? props.height : '50px')};
  font-size: ${(props) => (props.ft_size ? props.ft_size : '17px')};
  padding: ${(props) => (props.pd ? props.pd : '0')};
  &:focus {
    outline: none;
  }
  &:hover {
    border: 2px solid #f7f6f1;
    cursor: pointer;
  }
`;
