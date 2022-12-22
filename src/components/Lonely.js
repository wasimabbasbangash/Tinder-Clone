import React from "react";
import LikedPersons from "./LikedPersons";

function Lonely({ activeUserImage, likedUsers, superLikedUsers }) {
  return (
    <div className='lonely'>
      <p> There is no new prodiles around you</p>
      <span className='pulse'>
        <img src={`/images/users/${activeUserImage}`} alt='You...' />
      </span>

      <div id='liked-people'>
        <p>
          {likedUsers.length > 0 &&
            "People you like... let's hope they like you too!"}
        </p>
        {likedUsers.map((user) => (
          <LikedPersons key={user.id} person={user} />
        ))}

        <p>
          {superLikedUsers.length > 0 &&
            "People you like... let's hope they like you too!"}
        </p>
        {superLikedUsers.map((user) => (
          <LikedPersons key={user.id} person={user} />
        ))}
      </div>
      <p style={{ textAlign: "center" }}>
        you have {superLikedUsers.length} superlike
        {superLikedUsers.length > 1 ? "s." : "."}
      </p>
    </div>
  );
}

export default Lonely;
