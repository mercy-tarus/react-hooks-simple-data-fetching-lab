/** @format */

// create your App component here
import { useState, useEffect } from "react";
function App() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        setDog(data.message);
        setLoading(false);
        //    console.log(result)
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div>
        {loading ? <p>Loading...</p> : <img src={dog} alt="A Random Dog" />}
      </div>
      <div></div>
      <div></div>
    </>
  );
}
export default App;
