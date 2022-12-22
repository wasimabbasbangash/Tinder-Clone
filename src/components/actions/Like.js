import React from "react";

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
        <img src='/images/misc/like.png' alt='Like'></img>
      </button>
    </>
  );
}

export default Like;
