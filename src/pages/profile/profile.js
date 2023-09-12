import { useStoreActions } from "easy-peasy";
import { useAuth0 } from "@auth0/auth0-react";
import { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "inputValue":
      return { ...state,inputValue: action.payload };
    case "increment":
      return { ...state,count: state.count + 1 };
    default:
      throw new Error();
  }
};

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    inputValue: "",
    color: false,
  });
  const setUserInfo = useStoreActions((actions) => actions.setUserInfo);

  const handleClick = () => {
    // dispatch({ type: "increment" }); // Increment count, not colorToggle
    // setColor(!state.color); // Toggle the color property
  };

  const changeNumber = () => {
    dispatch({ type: "increment" });
  };

  return (
    isAuthenticated && (
      <article style={{ color: "white" }}>
        {console.log(JSON.stringify(user))}
        {Object.keys(user).map((obj, i) => (
          <p key={i}>
            {obj}: {user[obj]}
          </p>
        ))} 
        <p style={{ color: state.color ? "#fefefe" : "#00bef4" }}>hi</p>
        <button onClick={handleClick}>change the color</button>
        <input
          placeholder="say something"
          value={state.inputValue}
          onChange={(e) =>
            dispatch({ type: "inputValue", payload: e.target.value })
          }
        />
        <p>{state.inputValue}</p>
        <button onClick={changeNumber}>change the number</button>
        <p>{state.count}</p>
      </article>
    )
  );
};

export default Profile;
