import styles from './Post.module.css';
import { Comment } from "./Comment.jsx";
import { Avatar } from "./Avatar.jsx";
import {format, formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale/pt-BR";
import {useState} from "react";

export function Post({ author, publishedAt, content}) {
    const [comments, setComments] = useState([])
    const publishDateFormat = format(publishedAt, 'dd \'de\' LLLL \'às\' HH:mm\'h\'', {locale: ptBR})
    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt,
        { locale: ptBR, addSuffix: true, },
    )

    const [newCommentText, serNewCommentText] = useState('')

     function handleCreateNewComment() {
         event.preventDefault();

         setComments([...comments, newCommentText]);
         serNewCommentText('');
     }

     function handleNewCommentChange() {
         serNewCommentText(event.target.value);
     }

     function deleteComment(comment) {
            setComments(comments.filter(c => c !== comment));
     }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishDateFormat} dateTime={publishedAt.toISOString()}>
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {
                    content.map((item, index) => {
                        if (item.type === 'paragraph') {
                            return <p key={index}>{item.content}</p>
                        } else if (item.type === 'link') {
                            return <p><a key={index} href="#">{item.content}</a></p>
                        }
                    })
                }
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return (
                        <Comment
                            key={comment}
                            content={comment}
                            onDeleteComment={deleteComment}
                        />
                    )
                })}
            </div>
        </article>
    )
}