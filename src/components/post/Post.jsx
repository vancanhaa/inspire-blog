import "./style.scss";
import { PostImageBlock } from "./components/post-image-block/PostImageBlock";

export function Post(props) {
    return (
        <div className="post">
            <div className="post-number" style={{opacity: props.opacity}}>{props.number}</div>
            <PostImageBlock 
                imageUrl={props.imageUrl} 
                comment={props.comment} 
                view={props.view} 
                time={props.time}
            />
            <div className="post-content">
                <h2 className="post-content__heading">{props.title}</h2>
                <p className="post-content__author">By 
                    <span className="post-content__name-author">{props.author}</span></p>
                <p className="post-content__description">{props.description}</p>
            </div>
        </div>
    )
}