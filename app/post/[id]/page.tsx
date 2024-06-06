import React from "react";
import Link from "next/link";
import Post from "@/app/components/Post";

async function fetchData(id: string): Promise<string> {
    const result = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return await result.json();
}
const PagePost = async ({ params }: { params: { id: string } }) => {
        // console.log("props");
    // console.log(params);
    const postData: any = await fetchData(params.id);

    return (
        <Post postData={postData} />
    )
}

export default PagePost;