import React from "react";
import { GooeyCircleLoader } from "react-loaders-kit";
import styled from "styled-components";

function Loader() {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 3,
    colors: ["#FFD600", "#FFE978", "#191f2a"],
  };

  return (
    <LoaderDiv className="loader">
      <GooeyCircleLoader {...loaderProps} />
      <h2>Fitness-MAY</h2>
    </LoaderDiv>
  );
}

const LoaderDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  h2 {
    color: #FFD600;
    font-size: 1.5rem;
  }
`;

export default Loader;
