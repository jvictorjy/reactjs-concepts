import { Header } from "./components/Header.jsx";
import { Sidebar } from "./components/Sidebar.jsx";
import {Post} from "./components/Post.jsx";

import styles from './App.module.css'
import './global.css'

const posts = [
    {
        id: 1,
        author: {
            name: 'Victor Ribeiro',
            role: 'Software Engineer',
            avatarUrl: 'https://github.com/jvictorjy.png'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},,
            { type: 'link', content: '👉 jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-03-10 17:54:00'),
    },
    {
        id: 2,
        author: {
            name: 'José Silva',
            role: 'Software Engineer',
            avatarUrl: 'https://github.com/jvictorjy.png'
        },
        content: [
            { type: 'paragraph', content: 'Fala galeraa 👋'},
            { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},,
            { type: 'link', content: '👉 jane.design/doctorcare'},
        ],
        publishedAt: new Date('2024-02-09 17:54:00'),
    }
]

export function App() {

  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
            <Sidebar />

            <main>
                {posts.map(post => {
                    return (
                        <Post
                            key={post.id}
                            author={post.author}
                            content={post.content}
                            publishedAt={post.publishedAt}
                        />
                    )
                }) }
            </main>
        </div>
    </div>
  )
}