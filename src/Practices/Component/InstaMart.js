import React, { useState } from "react";

const Section = ({ title, desc, isVisible, setIsVisible }) => {
  return (
    <>
      <div className="border-1 border-black p-2 m-2">
        <h1 className=" font-bold text-xl">{title}</h1>

        {isVisible ? (
          <button
            className="mx-2  cursor-pointer underline"
            onClick={() => setIsVisible(false)}
          >
            Hide
          </button>
        ) : (
          <button
            className="cursor-pointer underline"
            onClick={() => setIsVisible(true)}
          >
            See more
          </button>
        )}
        {isVisible && <p>{desc}</p>}
      </div>
    </>
  );
};

const InstaMart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState(false);
  return (
    <>
      <div className=" m-2 p-2 ">
        <h1>InstaMart</h1>
        <Section
          title={"About instamart"}
          desc={`The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
         for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced 
         in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham`}
          isVisible={isVisibleSection === "about"}
          setIsVisible={() => setIsVisibleSection("about")}
        />
        <Section
          title={"Current News"}
          desc={`Contrary to popular belief, Lorem Ipsum is not simply random text
         It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard 
         McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
          isVisible={isVisibleSection === "current"}
          setIsVisible={() => setIsVisibleSection("current")}
        />
        <Section
          title={"Career News"}
          desc={`Contrary to popular belief, Lorem Ipsum is not simply random text
         It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard 
         McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered 
          the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" 
          (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular 
          during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`}
          isVisible={isVisibleSection === "career"}
          setIsVisible={() => setIsVisibleSection("career")}
        />
      </div>
    </>
  );
};
export default InstaMart;
