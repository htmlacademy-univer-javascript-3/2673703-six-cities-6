import CommentForm from '../comment-form/comment-form.tsx';
import Comment from '../comment/comment.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';
import {memo} from 'react';
import {getAuthorizationStatus} from '../../store/user-process/selectors.ts';
import {getCurrenOffer} from '../../store/offers-process/selectors.ts';


function CommentsList() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const comments = useAppSelector(getCurrenOffer).comments;

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

      {comments.map((comment) => (
        <Comment key={comment.id}
          comment={comment}
        />
      ))}
      {
        authorizationStatus === AuthorizationStatus.Auth && <CommentForm/>
      }

    </section>
  );
}

const MemoCommentsList = memo(CommentsList);

export default MemoCommentsList;
