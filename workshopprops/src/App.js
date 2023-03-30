import React from "react";
import Profile from "./Profile/Profilecomponent/Profile";

function App() {
  return (
    <div className="App">
      <Profile
        fullName="ramzi"
        bio="student"
        profession=" student"
        handleName={(name) => alert(`Hello ${name}`)}
      >
        <img src="https://gomycodelearndev.blob.core.windows.net/profiles/a3432795-a0f4-4b75-8d82-04c9d8d9bff4-133195602473459236.jpg" />
      </Profile>
    </div>
  );
}

export default App;
;