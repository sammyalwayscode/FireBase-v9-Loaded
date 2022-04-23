import { async } from "@firebase/util";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase/Base";

const SnapShot = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [getSnap, setGetSnap] = useState([]);

  const postData = async () => {
    await addDoc(collection(db, "shotNameColl"), { name, email });
    setName("");
    setEmail("");
    alert("Data Posted Sucessful");
  };

  const getData = async () => {
    const users = collection(db, "shotNameColl");
    onSnapshot(users, (snapshot) => {
      const r = [];
      snapshot.forEach((doc) => {
        r.push({ ...doc.data(), id: doc.id });
        // console.log(r);
        console.log(snapshot);
      });
      setGetSnap(r);
    });
  };
  console.log(getSnap);

  //Trying it the Second Time
  // const getData = () => {
  //   const users = collection(db, "base");
  //   onSnapshot(users, (snapshot) => {
  //     const r = [];
  //     snapshot.forEach((doc) => {
  //       r.push({ ...doc.data(), id: doc.id });
  //     });
  //     setGetSnap(r);
  //   });
  // };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <InputDatas>
          <input
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="What is Your Name"
          />
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Your Email Adress"
          />
          <button onClick={postData}>Sumit Now</button>
        </InputDatas>
        <ViewData>
          {getSnap?.map((props) => (
            <Card key={props.id}>
              <h2> {props.name} </h2>
              <i> {props.email} </i>
            </Card>
          ))}
        </ViewData>
      </Wrapper>
    </Container>
  );
};

export default SnapShot;

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

  button {
    color: white;
    text-decoration: none;
    padding: 15px 30px;
    border-radius: 5px;
    background-color: #f4b400;
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
  }
`;
const ViewData = styled.div`
  min-height: 100vh;
  width: 50%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  background-color: #4285f4;
`;
const Card = styled.div`
  height: 150px;
  width: 250px;
  background-color: #fff;
  text-align: center;
  margin: 10px;
`;
