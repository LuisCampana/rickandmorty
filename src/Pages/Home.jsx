import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import PeopleCard from "../Components/Card";
import Search from "../Components/Search";
import { useSelector, useDispatch } from "react-redux";
import { callapi, callapisearch } from "../reducer/get";

export default function Home({ name }) {
  const dispatch = useDispatch();
  const { datos: personajes } = useSelector((state) => state.lista);
  let params = new URLSearchParams(useLocation().search);
  name = params.get("name");
  useEffect(() => {
    name ? dispatch(callapisearch(name)) : dispatch(callapi());
  }, [name]);
  console.log(personajes);
  //el gap y pADDING LINEA 25 UL ESTABAN EN 40PX!!!!
  return (
    <div className="container ">
      <Search />
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-[30px] p-[30px] justify-center">
        {personajes?.map((personajes) => (
          <PeopleCard key={personajes.id} personajes={personajes} />
        ))}
      </ul>
    </div>
  );
}
//grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
