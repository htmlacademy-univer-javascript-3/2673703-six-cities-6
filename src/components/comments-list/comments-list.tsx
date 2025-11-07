import CommentForm from '../comment-form/comment-form.tsx';
import {CommentProps} from '../../types/comment.ts';
import Comment from '../comment/comment.tsx';

type CommentsListProps = {
  comments: CommentProps[];
}

function CommentsList({comments}: CommentsListProps) {
  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>

      {comments.map((comment) => (
        <Comment key={comment.id}
          comment={comment}
        />
      ))}
      <CommentForm/>
    </section>
  );
}

export default CommentsList;
