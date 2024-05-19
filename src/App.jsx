import { useState } from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  console.log("puppyList", puppyList);

  function handleClick() {

  }
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log("featuredPup: ", featuredPup);

  return (
    <>
      <div className="App">
        {puppies.map((puppy) => {
          return (
            <p
              onClick={() => { setFeatPupId(puppy.id) }}
              key={puppy.id}>{puppy.name}</p>
            // console.log("puppy.id: ", puppy.id)
          );
        })}
        {featPupId !== null && (
          <div>
            <h2>{featuredPup.name || "No Name"}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default App
