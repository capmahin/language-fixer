import React from "react";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div
            data-aos="zoom-out"
            data-aos-duration="1200"
            className="text-white "
        >
            <div className="">
                <div className="hero min-h-screen bg-primary-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div>
                            <h1 className="text-5xl font-bold text-accent">
                                Know more about us
                            </h1>
                            <p className="py-6">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Sit error dolores veniam
                                itaque ab possimus deserunt voluptatibus modi
                                placeat, accusamus vel eius aliquam explicabo
                                molestias amet praesentium expedita,
                                consequuntur dolorem! Provident accusamus, quo
                                amet, quam voluptate dolore impedit aperiam
                                nemo, facilis distinctio tenetur autem saepe
                                beatae deserunt harum fugit totam placeat nulla
                                delectus fuga mollitia maiores repellat
                                doloremque? Placeat eum aut est doloremque
                                quisquam quaerat ea. Sed provident quis
                                mollitia, vitae impedit molestias totam ipsa
                                temporibus vel commodi exercitationem voluptatem
                                ad similique? Ipsa, perspiciatis in? Ducimus
                                placeat hic sit, suscipit, distinctio ea
                                commodi, natus culpa quidem porro tenetur
                                maiores quam rerum possimus beatae quasi sunt
                                cumque. Repudiandae, animi laborum velit
                                distinctio quo, vel earum quos harum aspernatur
                                esse nemo ipsa? Maxime vitae, accusantium neque
                                nostrum reiciendis ratione nisi numquam
                                consequuntur qui similique dicta veritatis
                                tempore ipsum nesciunt vero provident deleniti
                                fugit magni nobis ad ullam iste unde quam quasi.
                                Ducimus hic provident similique nihil at ab odio
                                consequatur. Nulla fugit velit tenetur iure
                                debitis culpa, suscipit nam facilis saepe aut,
                                ipsam repellendus ea dolore cupiditate deleniti
                                natus sint voluptate similique distinctio!
                                Ducimus, hic earum ea, itaque dolores commodi
                                doloremque tempore, fugiat quos alias numquam
                                ullam sequi labore! Recusandae, obcaecati id.
                            </p>
                            <Link to="/">
                                <button className="btn btn-accent">Home</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
