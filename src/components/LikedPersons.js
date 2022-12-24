import React from "react";

function LikedPersons({ userId, person }) {
  console.log(person);
  return (
    <div className='liked-person'>
      <div className='liked-person-image'>
        <img
          src={`/images/users/${person.image}`}
          alt={`you liked ${person.name}`}
        />
      </div>
    </div>
  );
}

export default LikedPersons;
