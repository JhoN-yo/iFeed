import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './Comment.module.css'

export function Comment({ content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/valdemirfilho.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Valdemir Filho</strong>
              <time title="terca-feira, 4 de outubro as 12:00" dateTime="2022-10-04 08:13:30">Cerca de 2h atrás</time>
            </div>
            <button title="Deletar comentario">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}