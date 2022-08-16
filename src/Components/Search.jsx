import { useNavigate, useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams([]);
  let name = "";
  let navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault(); //para que no se recargue el formulario
    navigate(+searchParams);
  };

  return (
    <form className=" flex justify-center rounded-lg" onSubmit={handleSubmit}>
      <div className="">
        <input
          className="content-centr"
          placeholder="Name Personaje"
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
        ></input>
      </div>
    </form>
  );
}
