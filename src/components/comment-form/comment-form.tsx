﻿import {ChangeEvent, Fragment, useState} from 'react';
import {MAX_COMMENT_LENGTH, MIN_COMMENT_LENGTH} from '../../const.ts';


const ratingMap = {
  '3': '5-stars',
  '2': '4-stars',
  '4': '3-stars',
  '1': '2-stars',
  '5': '1-stars',
};

function CommentForm() {
  const [form, setForm] = useState({
    comment: '',
    rating: '',
  });

  const isValid = form.comment.length >= MIN_COMMENT_LENGTH &&
    form.comment.length <= MAX_COMMENT_LENGTH &&
    form.rating !== '';

  function handleFormChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    const {name, value} = evt.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          Object.entries(ratingMap).reverse().map(([score, status]) => (
            <Fragment key={status}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={score}
                id={status}
                type="radio"
                checked={form.rating === score}
                onChange={handleFormChange}
              />

              <label htmlFor={status} className="reviews__rating-label form__rating-label" title={status}>
                <svg className="form__star-image" width={37} height={33}>
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))
        }
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={form.comment}
        onChange={handleFormChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and
          describe your
          stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>Submit</button>
      </div>
    </form>
  );
}


export default CommentForm;
