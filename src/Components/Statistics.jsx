const cantidadDeBarras = 20;
export default function Statistics({ personajes }) {
  return (
    <div className="list-none">
      <div className="flex">
        {[...Array(cantidadDeBarras)].map((element, iattack) => (
          <label
            key={iattack}
            value={iattack}
            className={iattack < personajes.ataque ? "text-[#ea580c]" : "white"}
          >
            |
          </label>
        ))}
        <p className="pl-7">Attack:{personajes.ataque}</p>
      </div>

      <br />
      <div className="flex">
        {[...Array(cantidadDeBarras)].map((element, idef) => (
          <label
            key={idef}
            value={idef}
            className={idef < personajes.defensa ? "text-[#16a34a]" : "white"}
          >
            |
          </label>
        ))}
        <p className="pl-7	">Defense:{personajes.defensa}</p>
      </div>
      <br />
      <div className="flex">
        {[...Array(cantidadDeBarras)].map((element, ihp) => (
          <label
            key={ihp}
            value={ihp}
            className={ihp < personajes.vida ? "text-[#ef4444]" : "white"}
          >
            |
          </label>
        ))}
        <p className="pl-7">Life:{personajes.vida}</p>
      </div>
      <br />
    </div>
  );
}
