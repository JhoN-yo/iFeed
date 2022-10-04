import { Comment } from './Comment';
import { Avatar } from './Avatar'
import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/dev-jhon-ss.png" />
          <div className={styles.authorInfo}>
            <strong>Jhonata Moura</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title="terca-feira, 4 de outubro as 12:00" dateTime="2022-10-04 08:13:30">Públicado há 1h</time>
      </header>
      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>
        Acabei de subir mais um projeto no meu portifa. 
        É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      </p>
      <p>👉{' '}<a href="">jane.design/doctorcare</a></p>
      <p>
        <a>#novoprojeto</a>{' '}
        <a>#nlw</a>{' '}
        <a>#Rocketseat</a>
      </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}