import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
      padding: '20px'
    }}
    >
      <b>No page here(</b>
      <img
        src={'https://sticker-collection.com/stickers/plain/kremiruyte/thumbs/69934e90-0267-4626-9d2d-42c4b34a2ff7file_4702530.webp'}
        alt={'404 картинка'}
        width="400"
        height="500"
      />
      <Link to="/" style={{background: 'red'}}>
        <b>Вернуться на главную</b>
      </Link>
    </div>
  );
}

export default NotFound;
