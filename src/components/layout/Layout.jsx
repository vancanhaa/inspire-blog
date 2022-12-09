import "./style.scss";
import { Post } from "../post/Post";

const posts = [
    {
        number: 1,
        opacity: 1,
        title: "ON CHOOSING OUR CHILDREN’S NAMES…",
        author: "Norman Clark",
        imageUrl: "https://lovetaza.com/wp-content/uploads/2018/07/June-13-2018-4.jpg",
        comment: 95,
        view: "1.5k",
        time: "02 Dec",
        description: "Today i’m sharing how we chose all of our little ones’ names (no, we didn’t name samson after the regina spektor song!), thoughts on baby names in general, middle names, nicknames… the works!",
    },
    {
        number: 2,
        opacity: 0.75,
        title: "OUR TIPS AND TRICKS FOR TRAVELING WITH CHILDREN!",
        author: "Samson Eleanor",
        imageUrl: "https://lovetaza.com/wp-content/uploads/2017/05/020.jpg",
        comment: 58,
        view: "1.2k",
        time: "10 Sep",
        description: "It’s no secret that we love to travel and explore and have adventures together as a family. we definitely don’t have all the answers when it comes to how to travel smoothly with little ones",
    },
    {
        number: 3,
        opacity: 0.5,
        title: "THE BEST RASH GUARDS FOR KIDS!",
        author: "Michael Conrad",
        imageUrl: "https://lovetaza.com/wp-content/uploads/2021/06/LOVETAZA-bermuda4-5.jpg",
        comment: 142,
        view: "3.2k",
        time: "11 Nov",
        description: "I am passionate about a lot of things — from chocolate chip bagels to dry shampoo, there are a lot of things I swear by and will talk your ear off about because I love these things so much and in an odd way",
    },
    {
        number: 4,
        opacity: 0.25,
        title: "OUR BABY GIRLS ARE THREE!",
        author: "Madalena David",
        imageUrl: "https://lovetaza.com/wp-content/uploads/2021/05/BIRTHDAYCAKEMAY28-31.jpg",
        comment: 102,
        view: "9.1k",
        time: "28 Jan",
        description: "I  hope you are ready for the biggest photo dump ever, because I had to include basically all the photos from Madalena and Beatrice’s third birthday! Don’t ask a mother to narrow them down, now!",
    }
];

export function Layout() {
    return (
        <div className="layout">
            {posts.map((post,index) => {
                return (<Post key={index}
                    number={post.number} 
                    opacity={post.opacity} 
                    imageUrl={post.imageUrl}
                    comment={post.comment}
                    view={post.view}
                    time={post.time}
                    title={post.title} 
                    author={post.author}
                    description={post.description} 
                    />)
            })}

        </div>
    )
};