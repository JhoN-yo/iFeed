import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';
import styles from './SideBar.module.css';

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img  className={styles.cover} src="https://source.unsplash.com/random/?sunset" />
      <div className={styles.profile}>
        <Avatar src="https://github.com/dev-jhon-ss.png" />
        <strong>Jhonata Moura</strong>
        <span>Web Developer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>  
  );
}