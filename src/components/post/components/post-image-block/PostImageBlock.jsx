import "./style.scss";
import { FaComments } from "react-icons/fa";
import { AiFillEye, AiFillClockCircle } from "react-icons/ai";


export function PostImageBlock(props) {
    return (
        <div className="post-image-block" >
            <div className="post-image" style={{backgroundImage: `url(${props.imageUrl})`}}>
                <div className="interactive">
                    <div className="interactive__comment">
                        <FaComments />
                        <span>{props.comment}</span>
                    </div>
                    <div className="interactive__view">
                        <AiFillEye />
                        <span>{props.view}</span>
                    </div>
                    <div className="interactive__time">
                        <AiFillClockCircle />
                        <span>{props.time}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}