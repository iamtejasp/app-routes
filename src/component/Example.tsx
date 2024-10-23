"use client";
import { useParams } from "next/navigation";
import React from "react";

const Example = () => {
  //use in next js for get the params details
  //use in client component
  const param = useParams();
  console.log(param?.id);

  return <div>Example</div>;
};

export default Example;
