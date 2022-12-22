import React from "react";

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
        <img src='/images/misc/superlike.png' alt='Super Like'></img>
      </button>
    </>
  );
}

export default Superlike;
