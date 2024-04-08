import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar.jsx";
import {useState} from "react";

export function Comment({ content, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0);
    function handleDeleteComment() {
        onDeleteComment(content);
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1);
    }

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/jvictorjy.png"/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Victor</strong>
                            <time
                                title="19 de fevereiro às 17:54h"
                                dateTime="2024-02-19 17:54:00">Cerca há 1 hora
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24}/>
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}