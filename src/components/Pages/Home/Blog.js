import React from "react";

const Blog = () => {
    return (
        <div className="pt-28 pb-20 m-5">
            <h2 className="text-center mb-12 text-3xl font-bold text-slate-300">
                Blog Content
            </h2>
            <div className="parent-blog flex lg:flex-row flex-col justify-center items-center gap-14 ">
                <div class="card w-96 glass">
                    <figure>
                        <img src="https://cutt.ly/SXwNAOR" alt="car!" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-yellow-400">
                            Language Leaning Journey
                        </h2>
                        <p className="text-slate-200 mb-6">
                            How to park your car at your garage? See more.....
                        </p>
                    </div>
                </div>
                <div class="card w-96 glass">
                    <figure>
                        <img src="https://cutt.ly/SXwNAOR" alt="car!" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-yellow-400">
                            Language Leaning Journey
                        </h2>
                        <p className="text-slate-200 mb-6">
                            How to park your car at your garage? See more.....
                        </p>
                    </div>
                </div>
                <div class="card w-96 glass">
                    <figure>
                        <img src="https://cutt.ly/SXwNAOR" alt="car!" />
                    </figure>
                    <div class="card-body">
                        <h2 class="card-title text-yellow-400">
                            Language Leaning Journey
                        </h2>
                        <p className="text-slate-200 mb-6">
                            How to park your car at your garage? See more.....
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
