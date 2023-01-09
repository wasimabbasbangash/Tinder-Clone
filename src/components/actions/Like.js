import React from "react";
import like from "../../misc/like.png";

function Like({ userId, modifySuperficialChoices }) {
  console.log("person", userId);
  const likeUser = () => {};
  return (
    <>
      <button
        type='button'
        className='action-button'
        style={{ border: "1px solid #55E9CF" }}
        onClick={() => modifySuperficialChoices(userId, "ADD_TO_LIKED_USERS")}
      >
        <img src={like} alt='Like'></img>
      </button>
    </>
  );
}

export default Like;
