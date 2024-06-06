import Image from "next/image";
import React from "react";
import Link from "next/link";

async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    //const result = await res.json();
    return await res.json();
}

export default async function Home() {
    const posts = await fetchData();
    // console.log(res);

    return (
        <div>
            <h1 className={"page-title"}>Main Page</h1>
            <div className={"content"}>
                <h1>Posts:</h1>
                <div>
                    {posts.map((post: any) => (
                        <div key={post.id} className={"post"}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            <Link className={"more"} href={`/post/${post.id}`}>more...</Link>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
