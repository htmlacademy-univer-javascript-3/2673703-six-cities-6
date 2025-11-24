import CommentForm from '../comment-form/comment-form.tsx';
import {CommentProps} from '../../types/comment.ts';
import Comment from '../comment/comment.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';

type CommentsListProps = {
  comments: CommentProps[];
}

function CommentsList({comments}: CommentsListProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

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

export default CommentsList;
