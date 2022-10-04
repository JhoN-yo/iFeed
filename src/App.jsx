import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
          author="Jhonata Moura"
          content="Lorem"
          />
          <Post
            author="Julio Miguel"
            content="New Post"
          />
        </main>
      </div>
    </div>
  )
}


