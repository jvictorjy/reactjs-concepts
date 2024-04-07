import styles from './Comment.module.css'
import { ThumbsUp, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar.jsx";

export function Comment({ content, onDeleteComment }) {
    function handleDeleteComment() {
        onDeleteComment(content);
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
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}