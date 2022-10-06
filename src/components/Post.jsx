import { useState } from 'react';
import { Comment } from './Comment';
import { Avatar } from './Avatar'
import { format, formatDistance } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Muito bom, parabéns!! 👏👏'
  ]);

  const [newCommentText, setNewCommentText] = useState('');
  
  const publishedDateFormated = format(
    publishedAt, 
    "d 'de' LLLL 'as' HH:mm'h'", 
    { 
    locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistance(
  publishedAt,
  Date.now(), 
    {
      locale: ptBR,
      addSuffix: true,
    }
  );

  function handleCreateNewComment() {
    event.preventDefault() 

    setComments([...comments, newCommentText]);
    setNewCommentText('');
  };

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  };

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comments !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne);
  };

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>
      <div className={styles.content}>
        {content.map(item => {
          if (item.type === 'paragraph') {
            return <p key={item.content}>{item.content}</p>
          } else if (item.type === 'link') {
            return <p key={item.content}><a href="#">{item.content}</a></p>
          }
        })}
      </div>
      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." value={newCommentText} onChange={handleNewCommentChange} />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        {comments.map(comment => {
          return(
            <Comment key={comment} content={comment} onDeleteComment={deleteComment} />
          )
        })}
      </div>
    </article>
  );
}