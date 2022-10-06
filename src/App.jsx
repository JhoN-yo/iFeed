import { Header } from './components/Header';
import { SideBar } from './components/SideBar';
import { Post } from './components/Post';
import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/danilocecci.png',
      name: 'Danilo Cecci',
      role: 'Dev Front-end'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-10-06 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/valdemirfilho.png',
      name: 'Valdemir Filho',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifolio. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      { type: 'link', content: 'jane.design/doctorcare' }
    ],
    publishedAt: new Date('2022-10-3 20:00:00')
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(posts => {
            return (
              <Post 
                key={posts.id}
                author={posts.author}
                content={posts.content}
                publishedAt={posts.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}


