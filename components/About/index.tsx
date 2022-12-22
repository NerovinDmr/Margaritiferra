import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

export const About: React.FC = () => {
  return (
    <div className={style.container}>
    <div className={style.about}>
      <div className={style.photo}>
        <Image
          width={300}
          height={300}
          src={"/images/photo.png"}
          alt={"photo"}
        />
      </div>
      <div className={style.aboutInfo}>
       <h2> What is Lorem Ipsum?</h2><br /> <p>Lorem Ipsum is simply dummy text of the printing
        and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has survived
        not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with
        the release of Letraset sheets containing Lorem Ipsum passages, and more
        recently with desktop publishing software like Aldus PageMaker including
        versions of Lorem Ipsum.</p>
      </div>
    </div>
    </div>
  );
};
