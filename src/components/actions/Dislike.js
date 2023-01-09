import React from "react";
import dislike from "../../misc/dislike.png";

function Dislike({ userId, modifySuperficialChoices }) {
  const dislikeUser = () => {};
  return (
    <>
      <button
        type='button'
        className='action-button'
        style={{ border: "1px solid #FE5674" }}
        onClick={() =>
          modifySuperficialChoices(userId, "ADD_TO_DISLIKED_USERS")
        }
      >
        <img src={dislike} alt='Dislike'></img>
      </button>
    </>
  );
}

export default Dislike;
