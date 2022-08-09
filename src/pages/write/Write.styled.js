import styled from 'styled-components';
import Mongles from '../../static/images/mongles/mongles_group.png';
import '../../static/fonts/fonts.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';

export const WriteBox = styled.form`
  width: 485px;
  height: 620px;
  position: relative;
  box-sizing: border-box;
  background: rgba(255, 255, 255);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 20px;
  border: 9px solid #d7703f;
`;
export const WriteHeader = styled.div`
  position: absolute;
  top: 0;
  background-color: #d7703f;
  width: 100%;
  height: 10%;
`;
export const ArrowBack = styled(MdOutlineArrowBackIosNew)`
  color: #d7703f;
  margin-left: 6px;
  margin-top: 6px;
`;
export const ArrowArea = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  background-color: #f7f6f1;
  margin-top: 10px;
  margin-left: 20px;
`;
export const WriteDescript = styled.div`
  font-family: 'Cafe24Ssurround';
  width: 100%;
  font-size: 21px;
  text-align: center;
  position: absolute;
  top: 100px;
`;
export const WriteInput = styled.input`
  border-color: #d7703f;
  width: 100px;
  margin-left: 10px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 3.5px;
  border-radius: 2pt;
`;
export const InputArea = styled.div`
  font-size: 11px;
  font-family: 'Cafe24Ssurround';
  width: 40%;
  height: 3%;
  position: absolute;
  top: 200px;
  display: flex;
  margin-left: 50px;
  color: #d7703f;
`;
export const InputArea2 = styled.div`
  font-size: 11px;
  font-family: 'Cafe24Ssurround';
  width: 40%;
  height: 3%;
  position: absolute;
  top: 200px;
  left: 180px;
  display: flex;
  margin-left: 50px;
  color: #d7703f;
`;
