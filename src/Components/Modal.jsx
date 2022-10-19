import ReactDOM from "react-dom";
function Modal({ onClose, children }) {
  return (
    <div className="block absolute justify-center items-center  overflow-x-hidden overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
      <div className="relative h-[500px] w-[700px]">{children}</div>
    </div>
  );
}
export default function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <Modal onClose={onClose}>{children}</Modal>,
    document.getElementById("modal-root")
  );
}
