import React from "react";
import useContextHook from "../../hooks/useContextHook";
import Modal from "../ui/Modal";
import CancelAndDelete from "./../ui/CancelAndDelete";

function DeletePostModal() {
  const { isOpenModal } = useContextHook();

  return (
    <>
      {isOpenModal.deletePost ? (
        <Modal className="delete-post-modal">
          <h1>Delete Post</h1>
          <div className="ask-user-if-sure">
            <p>Are you sure to delete this post ?</p>
            <CancelAndDelete />
          </div>
        </Modal>
      ) : null}
    </>
  );
}

export default DeletePostModal;
