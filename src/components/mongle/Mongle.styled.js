import styled from 'styled-components';

export const StyledMongle = styled.div`
	background-repeat: no-repeat;
	background-image: url(${(props) => props.emotion ? props.emotion : 'm_orange'});
	background-size: contain;
	width: 80px;
	height: 70px;
	&:hover {
		background-image: url(${(props) => props.emotion_OL ? props.emotion_OL : 'm_orange_OL'});
    cursor: pointer;
	}
`;

export default StyledMongle;