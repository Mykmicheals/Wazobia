import React, { ReactNode } from "react";

type ModalContainerProps = {
  hideModal: () => void;
    children: ReactNode;
  handleInsert:()=>void
};

function ModalContainer({ hideModal, children ,handleInsert}: ModalContainerProps) {
    return (
      <>
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-4 px-10 w-3/4 md:w-2/4 rounded-lg shadow-lg relative">
            <button onClick={hideModal} className="absolute right-10 font-bold">
              X
            </button>
            <h3 className="font-bold">Embed</h3>
            <div>{children}</div>
            <button
              onClick={() => {
                handleInsert();
                hideModal();
              }}
              className="bg-green-600 px-6 py-2 my-4 rounded-sm text-gray-200 "
            >
              Embed
            </button>
            <button
              onClick={hideModal}
              className="ml-5 px-6 py-2 my-4 rounded-sm bg-gray-200 "
            >
              Cancel
            </button>
          </div>
        </div>
      </>
    );
}

export default ModalContainer;
