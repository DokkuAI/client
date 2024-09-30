"use client";

import axios from "axios";

const DeleteRecord = ({ id, url, setDlt }: any) => {
  async function handleDelete() {
    await axios.delete(`http://localhost:8080/v1/${url}/${id}`);
    setDlt((value:any)=>{return !value});
  }
  return (
    <div className="text-red-500" onClick={handleDelete}>
      Delete
    </div>
  );
};

export default DeleteRecord;
