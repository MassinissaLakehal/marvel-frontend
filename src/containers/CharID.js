import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

const CharID = () => {
  const [catchId, setCatchId] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { characterId } = useParams();
  // console.log(characterId);

  // créer une nouvelle page spécifique pour character ID et copier la fonction ci-dessous dans la nouvelle page
  useEffect(() => {
    const fetchId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/comics/${characterId}`
        );
        setCatchId(response.data);
        setIsLoading(false);
        //  console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchId();
  }, []);
  //Fin de la fonction

  return isLoading ? (
    <div>En cours de chargement</div>
  ) : (
    <div>
      <h1>Comics for this character</h1>
      {/* {console.log(catchId)} */}
      {/*  {catchId?.results.map((comic, index) => {
        console.log(comic);
        // L'erreur est peut-être dans ces 2 lignes
        return <div key={comic.comics}></div>;
      })}
    */}
    </div>
  );
};

export default CharID;
