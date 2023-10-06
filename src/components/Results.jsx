import React from "react";

export default function Results({ results }) {
  const objectList = { results }.results;
  return (
    <>
      {objectList.map((result) => (
        <div key={result.id}> {result.original_title}</div>
      ))}
    </>
  );
}
