import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import styled from "styled-components";
import { db } from "../Firebase/Base";

const PostBase = () => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  console.log(name, desc);
  const postData = async () => {
    addDoc(collection(db, "base"), {
      school: name,
      description: desc,
    });
  };
  return (
    <Container>
      <Wrapper>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="School Name"
        />
        <input
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          placeholder="School Description"
        />
        <button onClick={postData}>Summit</button>
      </Wrapper>
    </Container>
  );
};

export default PostBase;

const Container = styled.div``;
const Wrapper = styled.div``;
