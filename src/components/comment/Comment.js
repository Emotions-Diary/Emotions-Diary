import { RiDeleteBinLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { deleteCommentThunk } from '../../redux/modules/comment';
import {
  CommentBox,
  CommentNickName,
  CommentText,
  CommentDeleteBox,
} from './Comment.styled';

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
        <RiDeleteBinLine style={{ color: '#848484' }} />
      </CommentDeleteBox>
    </CommentBox>
  );
};

export default Comment;
