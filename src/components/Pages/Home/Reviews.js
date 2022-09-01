import React, { useEffect, useState } from "react";
import underline from "../../../assets/underline.png";
import borderPrimary from "../../../assets/border primary.png";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("https://young-plains-25750.herokuapp.com/review")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pt-28 pb-20">
      <h2 className="text-center text-3xl font-bold text-slate-300">
        Learners Review
      </h2>
      <img className="mx-auto mt-1" src={underline} alt="" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 m-6 p-4 px-16">
        {reviews.map((review) => (
          <>
            <div className="card w-72 bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="mask mask-squircle w-12 h-12">
                  <img
                    src={review.imageUrl}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
                <h2 className="card-title">{review.name}</h2>
                <p>{review.comment}</p>
              </div>
            </div>
          </>
        ))}
      </div>
      <img className="mt-20 absolute w-screen" src={borderPrimary} alt="" />
    </div>
  );
};

export default Reviews;
