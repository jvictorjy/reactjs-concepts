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

    const [newCommentText, setNewCommentText] = useState('')

     function handleCreateNewComment() {
         event.preventDefault();

         setComments([...comments, newCommentText]);
         setNewCommentText('');
     }

     function handleNewCommentChange() {
         event.target.setCustomValidity('');
         setNewCommentText(event.target.value);
     }

     function deleteComment(comment) {
            setComments(comments.filter(c => c !== comment));
     }

     function handleNewCommentInvalid() {
            event.target.setCustomValidity('O comentário não pode ser vazio');
     }

     const isCommentEmpty = newCommentText.length === 0;

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
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit" disabled={isCommentEmpty}>
                        Publicar
                    </button>
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