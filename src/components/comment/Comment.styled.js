import styled from 'styled-components';

export const CommentBox = styled.div`
  font-size: 14px;
  width: 99%;
  display: flex;
  height: auto;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 5px;
`;
export const CommentNickName = styled.div`
  margin-left: 10px;
  width: 40%;
  height: 15px;
`;
export const CommentText = styled.div`
  width: 70%;
  word-break: break-all;
  height: auto;
`;
export const CommentDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 13%;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;