import React from "react";

const UserCard = ({ user }) => {
  const { firstName, lastName, photoUrl, age, gender, about } = user;
  return (
    <div>
      <div className="card bg-base-300 p-8 w-96 shadow-sm">
        <figure>
          <img src={photoUrl} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{firstName + " " + lastName}</h2>
          <p>{about}</p>
          <p>{age + " " + gender}</p>
          <div className="card-actions flex justify-between flex-row">
            <button className="btn btn-primary w-[50%]">Send Request</button>
            <button className="btn btn-secondary w-[40%]">Interested</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
