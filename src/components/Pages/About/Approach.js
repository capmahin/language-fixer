import React from "react";
import communication from "../../../assets/approach/communication.svg";
import standout from "../../../assets/approach/standout_content.svg";
import approach from "../../../assets/approach/a_blended_approach.svg";
import personalization from "../../../assets/approach/group_photo.svg";
import learn from "../../../assets/approach/many_ways_to_learn.svg";
import continuous from "../../../assets/approach/duo_bicep_curl.svg";
import { Link } from "react-router-dom";

const Approach = () => {
    return (
        <div className="lg:mx-56 mx-10 my-10 ">
            <div>
                <h1 className="text-accent font-bold text-2xl mb-3">
                    Our teaching approach
                </h1>
                <p>
                    We believe that anyone can learn a language with Duolingo.
                    Our free, bite-size lessons feel more like a game than a
                    textbook, and that's by design: Learning is easier when
                    you're having fun. <br /> <br /> But Duolingo isn't just a
                    game. It's based on a methodology proven to foster long-term
                    retention, and a curriculum aligned to an international
                    standard. Let's explore how language learning happens with
                    Duolingo!
                </p>
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <img src={communication} alt="" />
                <div className="">
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Real-life communication
                    </h1>
                    <p>
                        Language is ultimately a communication tool. Duolingo
                        takes a functional approach by focusing on what learners
                        actually want to do with a language. <br /> <br />
                        Lessons focus on a real-life goal — for instance,
                        ordering at a restaurant. Learners develop the
                        vocabulary and grammar needed to achieve that goal
                        through lots of varied practice in reading, writing,
                        listening, and speaking.
                    </p>
                </div>
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Standout content
                    </h1>
                    <p>
                        Along with commonly used phrases like "¿Dónde está el
                        baño?" (Where is the bathroom?), Duolingo learners also
                        encounter sentences like "Tu oso bebe cerveza" (Your
                        bear drinks beer).
                        <br /> <br />
                        Why the quirky sentences? They're memorable and more fun
                        to learn. Our unexpected content also pushes learners to
                        think carefully about the language they're learning.
                    </p>
                </div>
                <img className="w-96" src={standout} alt="" />
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <img className="w-96" src={approach} alt="" />
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        A balanced approach
                    </h1>
                    <p>
                        Duolingo allows learners to discover patterns on their
                        own without needing to focus on language rules — the
                        same way you learned your first language as a child.
                        This approach, called "implicit learning," is ideal for
                        developing a strong foundational knowledge of a language
                        and its rules. <br /> <br />
                        But explicit instruction is useful for some concepts. So
                        Duolingo offers both! In addition to lessons, learners
                        can access Tips for explanations on grammar,
                        pronunciation, and helpful phrases.
                    </p>
                </div>
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Personalization
                    </h1>
                    <p>
                        With over 500 million learners, you’d think personalized
                        instruction would be tough to pull off. But we’re up for
                        the challenge! Machine learning algorithms are always at
                        work to serve up learning material at just the right
                        difficulty level for each learner.
                    </p>
                </div>
                <img className="w-96" src={personalization} alt="" />
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <img className="w-96" src={learn} alt="" />
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Many ways to learn
                    </h1>
                    <p>
                        Learners benefit from varied exposure to language.
                        That's why we offer learning experiences like in-person
                        events, interactive stories, and podcasts. <br />
                        <br />
                        These additional formats help learners with interaction,
                        conversation, and reading and listening comprehension —
                        all valuable skills for real-world language practice!
                    </p>
                </div>
            </div>
            <hr className="my-10" />
            <div className="flex lg:flex-row flex-col justify-between items-center gap-10">
                <div>
                    <h1 className="text-accent font-bold text-2xl mb-3">
                        Continuous improvement
                    </h1>
                    <p>
                        At Language Fixer, we're committed to improvement. Test
                        questions are embedded throughout our courses to measure
                        how learners are progressing — and to show where
                        Language Fixer can improve. <br /> <br />
                        We use the results to develop new and better courses,
                        expand our universe of language-learning tools, update
                        our materials as languages evolve, and ensure we're
                        continuing to offer the best language education in the
                        world. Like language, we never stand still.
                    </p>
                </div>
                <img className="w-96" src={continuous} alt="" />
            </div>
            <hr className="my-10" />

            <div className="text-center">
                <p className="my-5">
                    Have questions?{" "}
                    <a className="text-accent" href="/contact">
                        Contact us
                    </a>{" "}
                    or, start learning
                </p>
                <Link to="/">
                    <button className="btn btn-accent">Start Learning</button>
                </Link>
            </div>
            <hr className="my-10" />
        </div>
    );
};

export default Approach;
