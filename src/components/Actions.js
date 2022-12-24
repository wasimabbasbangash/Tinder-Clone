import React from "react";
import Rewind from "./actions/Rewind";
import Superlike from "./actions/Superlike";
import Like from "./actions/Like";
import Dislike from "./actions/Dislike";

function Actions({ person, modifySuperficialChoices }) {
  return (
    <div id='actions'>
      <Rewind
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      ></Rewind>
      <Like
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
      <Superlike
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
      <Dislike
        userId={person.id}
        modifySuperficialChoices={modifySuperficialChoices}
      />
    </div>
  );
}

export default Actions;
