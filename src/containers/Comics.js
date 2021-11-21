import axios from "axios";
import { useState, useEffect } from "react";

const Comics = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/comics");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="comicPage">
      <h1>COMICS</h1>
      <p>
        <input
          type="text"
          name="searchBar"
          placeholder="What are you searching for?"
        />
      </p>
      <div className="searchResults">Results</div>
      {data.results.map((comic, index) => {
        return (
          <div key={comic._id} className="comicContainer">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comics;
