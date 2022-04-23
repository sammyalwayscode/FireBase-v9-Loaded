import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase/Base";
import { NavLink } from "react-router-dom";

const EditData = () => {
  const [forSnap, setForSnap] = useState([]);
  const [newId, setNewId] = useState("");

  const GetIdTest = (id) => {
    console.log("Docunment ID:", id);
    setNewId(id);
  };

  const getSnap = () => {
    const users = collection(db, "shotNameColl");
    onSnapshot(users, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
      });
      setForSnap(r);
    });
  };

  const editData = async (id, newName, newEmail) => {
    const userDoc = doc(db, "shotNameColl", id);
    const newField = { newName: newName, newEmail: newEmail };
    await updateDoc(userDoc, newField);
  };

  const deleteData = async (id) => {
    const userDoc = doc(db, "shotNameColl", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    getSnap();
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* <InputDatas>
          <input placeholder="What is Your Name" />
          <input placeholder="Your Email Adress" />
          <button>Sumit Now</button>
        </InputDatas> */}
        <ViewData>
          {forSnap?.map((props) => {
            return (
              <Card key={props.id}>
                <h2> {props.name} </h2>
                <i> {props.email} </i>

                <Button to={`/edit/${props.id}`}>Edit Data</Button>

                <div
                  onClick={(id) => {
                    deleteData(id);
                  }}
                >
                  Delete
                </div>
              </Card>
            );
          })}
        </ViewData>
      </Wrapper>
    </Container>
  );
};

export default EditData;

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
`;
const InputDatas = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #db4437;
  position: static;

  input {
    width: 80%;
    height: 30px;
    margin: 10px 0;
    font-family: poppins;
  }
`;
const ViewData = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: column; */
  background-color: #4285f4;
`;
const Card = styled.div`
  height: 250px;
  width: 250px;
  background-color: #fff;
  text-align: center;
  margin: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Button = styled(NavLink)`
  width: 40%;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 5px;
  background-color: darkcyan;
  color: white;
  border: none;
  font-family: poppins;
  margin: 10px 0;
  transition: all 350ms;
  transform: scale(1);

  :hover {
    transform: scale(0.97);
    cursor: pointer;
  }
`;
