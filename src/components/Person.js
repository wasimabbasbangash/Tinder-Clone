import React from "react";
import Actions from "./Actions";

function Person({ person, modifySuperficialChoices }) {
  console.log(person);
  // const [name, desc, age, image] = person;
  const { id, name, gender, city, image } = person;
  // const name = person.name;
  // const desc = person.desc;
  // const age = person.age;
  // const image = person.image;

  return (
    <>
      <div className='person'>
        <div className='person-photo'>
          {/* <img src={`/images/users/${image}`} alt={name}></img> */}
          <img src={image} alt={name}></img>
        </div>

        <div className='person-description'>
          <div className='person-name-age'>
            <span>{name}</span>
          </div>
          <p />
          <p className='person-info'>
            {gender}, {city}
          </p>
        </div>
      </div>

      <Actions
        person={person}
        modifySuperficialChoices={modifySuperficialChoices}
      ></Actions>
    </>
  );
}

export default Person;
