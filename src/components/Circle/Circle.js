import { SignInHeaderCircleGroup, SignInHeaderCircles } from './Circle.styled';

const Circle = () => {
  return (
    <SignInHeaderCircleGroup>
      <SignInHeaderCircles color={'#FFFFFF'} />
      <SignInHeaderCircles color={'#f7cf8a'} />
      <SignInHeaderCircles color={'#0ace00'} />
    </SignInHeaderCircleGroup>
  );
};

export default Circle;