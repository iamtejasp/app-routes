import React from "react";

const page = ({ params }: { params: { id: [string] } }) => {
  //* [...id] -> It will return array of multiple id
  //* ["params1", "params2", "params3"....]
  //* But here if we can write any params then it gives not found error so that we can use the --> [[...id]]
  console.log(params?.id);

  return (
    <>
      <div>MULTI PARAMS</div>
      <h1>{params?.id?.join(", ")}</h1>
    </>
  );
};

export default page;
