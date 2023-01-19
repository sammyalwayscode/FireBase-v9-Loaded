import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import React, { useState } from "react";
import styled from "styled-components";
import { db, storage } from "../Firebase/Base";

const ImgUpload = () => {
  const [avatar, setAvatar] = useState("");

  console.log(avatar);
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const fileRef = ref(storage, "/myImage", +file.name);
    const storageRef = uploadBytesResumable(fileRef, file);
    getDownloadURL(storageRef.snapshot.ref).then((url) => {
      setAvatar(url);
    });
  };

  const uploadData = async () => {
    addDoc(collection(db, "imgStore"), {
      avatar: await avatar,
    });
  };

  return (
    <Container>
      <Wrapper>
        <ForInp>
          <input type="file" onChange={uploadImage} />
        </ForInp>
        <ForMap>
          <img src="" alt="img" />
          <button onClick={uploadData}>Upload Image</button>
        </ForMap>
      </Wrapper>
    </Container>
  );
};

export default ImgUpload;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const Wrapper = styled.div`
  margin-top: 40px;
`;
const ForInp = styled.div`
  margin-bottom: 30px;
  input {
    height: 30px;
    width: 300px;
    border: 1px solid gray;
  }
`;
const ForMap = styled.div`
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
    border: 2px solid #000;
    background-color: aliceblue;
  }
`;
