import CommentForm from '../comment-form/comment-form.tsx';
import Comment from '../comment/comment.tsx';
import {useAppSelector} from '../../hooks';
import {AuthorizationStatus} from '../../const.ts';


function CommentsList() {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);
  const comments = useAppSelector((state) => state.currentComments);

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
