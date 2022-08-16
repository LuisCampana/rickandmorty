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
  //console.log(name);
  useEffect(() => {
    name ? dispatch(callapisearch(name)) : dispatch(callapi());
  }, [name]); //si pongo dispatch debo tocar buttom(osea enterr) con name se busca solo

  return (
    <div className="container">
      <Search />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5	 justify-center gap-[40px] p-[40px] ">
        {personajes?.map((personajes) => (
          <PeopleCard key={personajes.id} personajes={personajes} />
        ))}
      </div>
    </div>
  );
}
