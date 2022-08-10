import styled from 'styled-components';

export const SignInHeaderCircleGroup = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
  margin-left: 20px;
`;
export const SignInHeaderCircles = styled.div`
  background-color: ${(props) => (props.color ? props.color : 'black')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: none;
`;
