import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";


function Blogs(){

    // consume data
    const {posts,loading} = useContext(AppContext);
    console.log("printing inside blogs componets");
    console.log(posts);

    return(
        <div className="w-11/12 mt-[67px] max-w-[630px] mb-4 z--2 flex flex-col items-center justify-center mx-auto">
            {
                loading ? (<Spinner />) : (
                    
                        posts.length === 0 ? (
                            <div>
                                <p>No post found</p>
                            </div>
                        ) : (
                            posts.map((post)=>{
                                return (
                                    <div className="mt-5 border border-red-400 py-5 px-4 gap-y-2 flex flex-col" key={post.id}>
                                        <p className="font-bold">{post.title}</p>
                                        <p>
                                            By <span className="italic">{post.author}</span> on <span className="underline font-semibold">{post.category}</span>
                                        </p>
                                        <p>Posted On <span className="text-[13px]">{post.date}</span></p>
                                        <p>{post.content}</p>
                                        <div>
                                            {
                                                post.tags.map((tag,index)=>{
                                                    return(<span className="text-[13px] text-blue-700" key={index}>{`#${tag}  `}</span>)
                                                })
                                            }
                                        </div>
                                    </div>
                                )
                            })
                        )
                    
                )

            }

        </div>
    );

}


export default Blogs;