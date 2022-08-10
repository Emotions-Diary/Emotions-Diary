import styled from 'styled-components';
import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteCommentThunk } from '../../redux/modules/comment';

const Comment = ({ nickName, comment, id }) => {
  const dispatch = useDispatch();

  const deleteComment = () => {
    dispatch(deleteCommentThunk(id));
  };

  return (
    <CommentBox>
      <CommentNickName>{nickName}</CommentNickName>
      <CommentText>{comment}</CommentText>
      <CommentDeleteBox onClick={deleteComment}>
        <RiDeleteBinLine style={{color: "#848484"}}/>
      </CommentDeleteBox>
    </CommentBox>
  );
};

export default Comment;

const CommentBox = styled.div`
  font-size: 14px;
  width: 99%;
  display: flex;
  height: auto;
  border-bottom: 1px solid #c4c4c4;
  padding-bottom: 5px;
`;
const CommentNickName = styled.div`
  margin-left: 10px;
  width: 40%;
  height: 15px;
`;
const CommentText = styled.div`
  width: 70%;
  word-break: break-all;
  height: auto;
`;
const CommentDeleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 13%;
  height: 30px;
  &:hover {
    cursor: pointer;
  }
`;
