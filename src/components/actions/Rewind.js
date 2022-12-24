import React from "react";

function Rewind({ userId, modifySuperficialChoices }) {
  return (
    <>
      <button
        type='button'
        className='action-button'
        style={{ border: "1px solid #FDC302" }}
        onClick={() => modifySuperficialChoices(userId, "REWIND_USER")}
      >
        <img src='/images/misc/rewind.png' alt='Rewind'></img>
      </button>
    </>
  );
}

export default Rewind;
