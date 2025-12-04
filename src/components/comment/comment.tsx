import {CommentProps} from '../../types/comment.ts';
import {memo} from 'react';

type CommentComponentProps = {
  comment: CommentProps;
}


function Comment({comment}: CommentComponentProps) {
  const user = comment.user;

  return (
    <ul className="reviews__list">
      <li className="reviews__item">
        <div className="reviews__user user">
          <div className="reviews__avatar-wrapper user__avatar-wrapper">
            <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54"
              alt="Reviews avatar"
            />
          </div>
          <span className="reviews__user-name">
            {user.name}
          </span>
        </div>
        <div className="reviews__info">
          <div className="reviews__rating rating">
            <div className="reviews__stars rating__stars">
              <span style={{width: `${comment.rating * 20}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <p className="reviews__text">
            {comment.comment}
          </p>
          <time className="reviews__time" dateTime={comment.date}>{Intl.DateTimeFormat('en-US', {
            month: 'long',
            year: 'numeric',
          }).format(new Date(comment.date))}
          </time>
        </div>
      </li>
    </ul>
  );
}

export default memo(Comment);
