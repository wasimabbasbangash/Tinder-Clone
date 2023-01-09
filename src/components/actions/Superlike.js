import React from "react";
import superlike from "../../misc/superlike.png";

function Superlike({ userId, modifySuperficialChoices }) {
  return (
    <>
      <button
        type='button'
        className='action-button'
        style={{ border: "1px solid #27C4F9" }}
        onClick={() =>
          modifySuperficialChoices(userId, "ADD_TO_SUPERLIKED_USERS")
        }
      >
        <img src={superlike} alt='Super Like'></img>
      </button>
    </>
  );
}

export default Superlike;
