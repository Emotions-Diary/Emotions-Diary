import StyledMongle from './Mongle.styled';
import { useNavigate } from 'react-router-dom';

const Mongle = ({ id, emotion, emotion_OL }) => {
  const navigate = useNavigate()
  return <StyledMongle onClick={() =>navigate(`/detail/${id}`)} emotion={emotion} emotion_OL={emotion_OL} />;
};

export default Mongle;
