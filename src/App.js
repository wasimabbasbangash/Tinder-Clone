import "./App.css";
import Lonely from "./components/Lonely";
import Header from "./components/Header";
import Person from "./components/Person";
// import data from "./data.json";
import Actions from "./components/Actions";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/login/Login";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const [data, setData] = useState([]);
  const [people, setPeople] = useState([]);
  const [likedUsers, setLikedUsers] = useState([]);
  const [superLikedUsers, setSuperLikedUsers] = useState([]);
  const [dislikedUsers, setDislikedUsers] = useState([]);
  const [lastAction, setLastAction] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const { isAuthenticated, getIdTokenClaims } = useAuth0();

  const activeUsers = 0;

  // fetchin users
  useEffect(() => {
    let values = [];
    async function fetchApi() {
      await axios
        .get("https://randomuser.me/api/?results=100")
        .then((response) => {
          response.data.results.map((person, index) => {
            values.push({
              "id": index,
              "name": person.name.first + " " + person.name.last,
              "gender": person.gender,
              "city": person.location.city,
              "image": person.picture.large,
              "likedUsers": [],
              "superLikedUsers": [],
              "dislikedUsers": [],
              "likedBy": [],
            });
          });
        });
      setData(values);
      setPeople(values);
    }
    fetchApi();
    console.log(people);
  }, []);

  // update actions list
  const addActionList = (lastActionArray, action) => {
    lastActionArray.push(action);
    return lastActionArray;
  };

  // remove last action and rewind
  const rewindLastAction = (userId) => {
    const theLastActionPerformed = lastAction[lastAction.length - 1];
    let rewindPerson;
    // find which array to modify
    switch (theLastActionPerformed) {
      case "ADD_TO_LIKED_USERS":
        rewindPerson = likedUsers.pop();
        setLikedUsers(likedUsers.slice(0, -1));
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        rewindPerson = superLikedUsers.pop();
        setSuperLikedUsers(superLikedUsers.slice(0, -1));
        break;
      case "ADD_TO_DISLIKED_USERS":
        rewindPerson = dislikedUsers.pop();
        setDislikedUsers(dislikedUsers.slice(0, -1));
        break;
      default:
        console.log("you have not interacted with any profile");
    }
    let peopleArray = people;
    let firstProfile = people.shift();
    peopleArray.unshift(rewindPerson);
    peopleArray.unshift(firstProfile);

    setLastAction(lastAction.slice(0, -1));
    return peopleArray;
  };

  // remove user from data source
  const removedPeopleFromDataSrc = (peopleSource, userId) =>
    peopleSource.filter((user) => user.id !== userId);

  const modifySuperficialChoices = (userId, action) => {
    const newPeople = [...people];
    const newLikedUser = [...likedUsers];
    const newSuperLikedUsers = [...superLikedUsers];
    const newDislikedUsers = [...dislikedUsers];

    switch (action) {
      case "ADD_TO_LIKED_USERS":
        console.log(people[activeUsers]);
        if (!people[activeUsers].likedUsers.includes(userId))
          newPeople[activeUsers].likedUsers.push(userId);
        setLastAction(addActionList(lastAction, "ADD_TO_LIKED_USERS"));
        newLikedUser.push(data[userId]);

        setLikedUsers(newLikedUser);
        setPeople(removedPeopleFromDataSrc(people, userId));
        break;
      case "ADD_TO_SUPERLIKED_USERS":
        if (!people[activeUsers].superLikedUsers.includes(userId))
          newPeople[activeUsers].superLikedUsers.push(userId);
        newSuperLikedUsers.push(data[userId]);

        setSuperLikedUsers(newSuperLikedUsers);
        setLastAction(addActionList(lastAction, "ADD_TO_SUPERLIKED_USERS"));
        setPeople(removedPeopleFromDataSrc(people, userId));
        break;
      case "ADD_TO_DISLIKED_USERS":
        if (!people[activeUsers].dislikedUsers.includes(userId))
          newPeople[activeUsers].dislikedUsers.push(userId);
        newDislikedUsers.push(data[userId]);

        setLastAction(addActionList(lastAction, "ADD_TO_DISLIKED_USERS"));
        setDislikedUsers(newDislikedUsers);
        setPeople(removedPeopleFromDataSrc(people, userId));
        break;
      case "REWIND_USER":
        console.log("rewind pressed");
        if (lastAction.length > 0) {
          setPeople(rewindLastAction());
        }
        break;
      default:
        return people;
    }
  };
  return (
    <div className='App'>
      {/* <p>{people.length}</p> */}
      <Header></Header>
      {isAuthenticated ? (
        people[1] ? (
          <Person
            key={people[1].id}
            person={people[1]}
            modifySuperficialChoices={modifySuperficialChoices}
            likedUsers={likedUsers}
          />
        ) : people[activeUsers] ? (
          <Lonely
            activeUserImage={people[activeUsers].image}
            likedUsers={likedUsers}
            superLikedUsers={superLikedUsers}
          />
        ) : (
          "There was a problem connecting to the server!"
        )
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
