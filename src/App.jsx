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
        <div className="puppy-list">
          {puppies.map((puppy) => (
            <p
              onClick={() => setFeatPupId(puppy.id)}
              key={puppy.id}
              className="puppy-item">{puppy.name}</p>
          ))}
        </div>
        {featPupId !== null && (
          <div className="featured-pup">
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
