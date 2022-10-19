import { useState } from "react";
import Modal from "./Modal";
import Modalfight from "./Modalfight";
export default function Buttonmodal() {
  const [showmodal, setshowmodal] = useState(false);
  const handleClick = () => {
    return setshowmodal(true);
  };
  const handleClose = () => {
    return setshowmodal(false);
  };
  return (
    <>
      <div className="contenedor de modal m-[22px]">
        <button
          className="buttom para modal hover:bg-yellow-600 rounded-lg cursor-pointer  h-[50px] w-[100px] text-yellow-400 border-2 border-yellow-600 hover:text-yellow-200  "
          onClick={handleClick}
        >
          MODO PELEA
        </button>
      </div>
      {showmodal && (
        <Modal onClose={handleClose}>
          <Modalfight onClose={handleClose} />
        </Modal>
      )}
    </>
  );
}
