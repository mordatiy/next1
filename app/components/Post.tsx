import Link from "next/link";
import React from "react";

const Post = ({postData}: any) => {
    return (
        <div>
            <Link href={"/"}>back</Link>
            <h1 className={"page-title single-post-title"}>(Post # {postData.id})</h1>
            <div className={"content"}>

                <div className={"post single-post"}>
                    <h3>{postData.title}</h3>
                    {postData.body}
                    <div className={"single-post-author"}>
                        AuthorID: {postData.userId}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Post;