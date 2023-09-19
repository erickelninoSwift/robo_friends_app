import React from "react";

export const Card = ({ robot }) => {
  const { email, id, name, username } = robot;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${name}`} alt="jackpot" />
      <div>
        <h2>{username}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
