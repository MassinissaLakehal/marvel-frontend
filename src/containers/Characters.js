import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Characters = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/characters");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  /*   créer une nouvelle page spécifique pour character ID et copier la fonction ci-dessous dans la nouvelle page
  const fetchId = async (id) => {
    try {
      const response = await axios.get(`http://localhost:4000/comics/${id}`);
      setCatchId(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  Fin de la fonction */

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div className="charactersPage">
      <h1>CHARACTERS</h1>
      {data.results.map((character, index) => {
        // console.log(character._id);
        return (
          <div key={character._id} className="characterContainer">
            <img
              onClick={() => navigate(`/comics/${character._id}`)} //character._id)}
              // LE OnClick fera naviguer dans la nouvelle page, puis une requête axios y sera lancée
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt=""
            />
            <h2>{character.name}</h2>
            <p>{character.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
