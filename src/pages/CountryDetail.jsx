import React from "react";
import { useParams } from "react-router-dom";

function CountryDetail() {
  const { country } = useParams();

  return <div>{country}</div>;
}

export default CountryDetail;
