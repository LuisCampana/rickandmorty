import { useNavigate, useSearchParams } from "react-router-dom";
import Buttonmodal from "./Buttonmodal";
export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams([]);
  let name = "";
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(+searchParams);
  };
  return (
    <div className="">
      <div id="search-cont" className="justify-center flex">
        <Buttonmodal />
        <form
          className="flex justify-center p-[30px]  "
          onSubmit={handleSubmit}
        >
          <div className="">
            <input
              className="shadow rounded-[30px] border-0 placeholder:italic border-solid	h-[30px] pt-[5px] pr-[25px] pb-[5px] pl-[5px]  "
              placeholder="Search Personajes"
              type="text"
              value={searchParams.get("name") || ""}
              onChange={(e) => {
                e.preventDefault();
                name = e.target.value;
                if (name) {
                  setSearchParams({ name });
                } else {
                  setSearchParams({});
                }
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
