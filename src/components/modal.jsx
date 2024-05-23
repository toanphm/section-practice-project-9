import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./button";

const Modal = forwardRef(({ children, ...props }, ref) => {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        // TODO: handle open actions
        dialogRef.current.showModal();
      },
    };
  });
  return createPortal(
    <dialog
      ref={dialogRef}
      className="p-8 rounded-2xl backdrop:bg-stone-900/90"
    >
      {children}
      <form className="mt-4 flex justify-end" method="dialog">
        <Button>Okay</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;
