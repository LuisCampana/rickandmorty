import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
const cantidadDeBarras = 20;
export default function Modalfight({ onClose }) {
  const { datos: personajes } = useSelector((state) => state.lista);
  const [battle1, setbattle1] = useState(0);
  const [battle2, setbattle2] = useState(0);
  const generarValor = () => Math.round(Math.random() * cantidadDeBarras);
  useEffect(() => {
    setbattle1(generarValor());
    setbattle2(generarValor());
  }, []);
  let ganador = "";
  function pelea() {
    let ataque1 = personajes[battle1].ataque;
    let defensa1 = personajes[battle1].defensa;
    let vida1 = personajes[battle1].vida;

    let ataque2 = personajes[battle2].ataque;
    let defensa2 = personajes[battle2].defensa;
    let vida2 = personajes[battle2].vida;
    for (let i = 1; i > 0; i++) {
      if (personajes[battle1].agilidad > personajes[battle2].agilidad) {
        let ataquereal = ataque1 - defensa2;
        let ataquereal2 = ataque2 - defensa1;
        vida2 = vida2 - ataquereal;
        vida1 = vida1 - ataquereal2;
      } else {
        let ataquereal1 = ataque1 - defensa2;
        let ataquereal22 = ataque2 - defensa1;
        vida1 = vida1 - ataquereal22;
        vida2 = vida2 - ataquereal1;
      }

      if (vida1 <= 0) {
        ganador = personajes[battle2].name;
        i = -99;
      } else if (vida2 <= 0) {
        ganador = personajes[battle1].name;
        i = -99;
      }
      i++;
    }
    return ganador;
  }

  return (
    <div className="contenedor de modal m-[5px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
      <div className="Modal  ">
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative sm:h-[250px] sm:w-[500px] md:h-[500px] md:w-[700px]">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#212F3D] text-[#FDFEFE] outline-none focus:outline-none">
              <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                <h3 className="text-3xl font-semibold justify-center">
                  Battle:
                </h3>
              </div>

              <div className="container p-[35px] gap-[25px]">
                <h1 className="grid  justify-center md:text-[40px] sm:text-[20px]">
                  {personajes[battle1].name}
                </h1>
                <p className="grid justify-center">
                  <img
                    className="rounded-lg w-[130px] h-[130px]"
                    src={personajes[battle1].image}
                    alt={personajes[battle1].name}
                  ></img>
                  <div className="list-none">
                    {[...Array(cantidadDeBarras)].map((element, iatt1) => (
                      <label
                        key={iatt1}
                        value={iatt1}
                        className={
                          iatt1 < personajes[battle1].ataque
                            ? "text-[#ea580c]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Attack:{personajes[battle1].ataque}
                    <br />
                    {[...Array(cantidadDeBarras)].map((element, idef1) => (
                      <label
                        key={idef1}
                        value={idef1}
                        className={
                          idef1 < personajes[battle1].defensa
                            ? "text-[#16a34a]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Defense:{personajes[battle1].defensa}
                    <br />
                    {[...Array(cantidadDeBarras)].map((element, ihp1) => (
                      <label
                        key={ihp1}
                        value={ihp1}
                        className={
                          ihp1 < personajes[battle1].vida
                            ? "text-[#ef4444]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Life:{personajes[battle1].vida}
                  </div>
                </p>
                <br />
                <h2 className=" grid justify-center md:text-[40px] sm:text-[20px]">
                  VS
                </h2>
                <br />
                <h1 className="grid justify-center md:text-[40px] sm:text-[20px]">
                  {personajes[battle2].name}
                </h1>
                <p className="grid justify-center">
                  <img
                    className="rounded-lg w-[130px] h-[130px]"
                    src={personajes[battle2].image}
                    alt={personajes[battle2].name}
                  ></img>
                  <div className="list-none">
                    {[...Array(cantidadDeBarras)].map((element, iatt2) => (
                      <label
                        key={iatt2}
                        value={iatt2}
                        className={
                          iatt2 < personajes[battle2].ataque
                            ? "text-[#ea580c]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Attack:{personajes[battle2].ataque}
                    <br />
                    {[...Array(cantidadDeBarras)].map((element, idef2) => (
                      <label
                        key={idef2}
                        value={idef2}
                        className={
                          idef2 < personajes[battle2].defensa
                            ? "text-[#16a34a]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Defense:{personajes[battle2].defensa}
                    <br />
                    {[...Array(cantidadDeBarras)].map((element, ihp2) => (
                      <label
                        key={ihp2}
                        value={ihp2}
                        className={
                          ihp2 < personajes[battle2].vida
                            ? "text-[#ef4444]"
                            : "white"
                        }
                      >
                        |
                      </label>
                    ))}
                    Life:{personajes[battle2].vida}
                  </div>
                </p>
              </div>
              <div className="grid items-center  p-6 border-t border-solid border-slate-200 rounded-b">
                <h3 className="justify-center grid  md:text-[40px] sm:text-[20px] ">
                  El ganador es: {pelea()}
                </h3>
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 justify-end"
                  type="button"
                  onClick={onClose}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </div>
    </div>
  );
}
