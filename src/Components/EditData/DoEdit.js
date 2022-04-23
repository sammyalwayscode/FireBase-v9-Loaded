import { doc, updateDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../Firebase/Base";

const DoEdit = ({ props }) => {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const { id } = useParams();
  //   const [newId, setNewId] = useState([]);

  //   const GetIdTest = (id) => {
  //     console.log("Docunment ID:", id);
  //     setNewId(id);
  //   };

  const editData = async () => {
    const userDoc = doc(db, "shotNameColl", id);
    const newField = { newName, newEmail };
    await updateDoc(userDoc, newField);
    console.log(id);
    console.log(newName);
  };

  useEffect(() => {
    editData();
  }, []);

  return (
    <div>
      <center>
        <h2>Edit Fild</h2>
        <input
          placeholder="Edit Name"
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <input
          placeholder="Edit Email"
          value={newEmail}
          onChange={(e) => {
            setNewEmail(e.target.value);
          }}
        />
        <button
          onClick={() => {
            editData(id);
          }}
        >
          Edit Data
        </button>
      </center>
    </div>
  );
};

export default DoEdit;
