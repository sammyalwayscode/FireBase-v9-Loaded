import { collection, getDocs } from "firebase/firestore";
import React, { useEffect } from "react";
import { db } from "../Firebase/Base";
import styled from "styled-components";

const GetBase = () => {
  const [getBase, setGetBase] = React.useState([]);

  const getData = async () => {
    const data = await getDocs(collection(db, "base"));
    setGetBase(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  console.log(getBase);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      {getBase?.map((props) => (
        <Wrap key={props.id}>
          <h2> {props.school} </h2>
          <div>
            {" "}
            <strong>Description:</strong> {props.description}{" "}
          </div>
        </Wrap>
      ))}
    </Container>
  );
};

export default GetBase;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  min-height: 100vh;
`;
const Wrap = styled.div`
  width: 250px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  h2 {
    margin: 10px;
  }
  div {
    margin: 10px;
  }
`;
