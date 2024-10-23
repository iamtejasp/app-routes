import { Metadata } from "next";
import React from "react";

// export const metadata: Metadata = {
//   title: "About Layout",
//   description: "Description from About",
// };

//* Dynamic meta data
//* Like user/:id so based on id we can find user data
//* params -> id --> fetch(id) --> data and set into meta data
//* we can do this only in layout file or page file
export async function generateMetadata({ params }): Promise<Metadata> {
  //fetch();
  return { title: "User.name" };
}

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h1>Hii from Layout</h1>
      {children}
    </div>
  );
};

export default layout;
