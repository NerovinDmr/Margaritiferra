import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

export const Materials: React.FC = () => {
  return (
    <div className={style.materials}>
      <div className={style.heading}>
        <h2>Materials</h2>
      </div >
      <div className={style.materialBlock}>
        <div className={style.materialItems}>
        <div className={style.materialItem}>
          <div className={style.zoom}>
            <Image
              width={300}
              height={300}
              src={"/images/Angora.jpeg"}
              alt={"material"}
            />
            <div className={style.materialName}>
              <span>Angora</span>
            </div>
          </div>
          <div className={style.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className={style.materialItem}>
          <div className={style.zoom}>
            <Image
              width={300}
              height={300}
              src={"/images/maher.jpg"}
              alt={"material"}
            />
            <div className={style.materialName}>
              <span>Maher</span>
            </div>
          </div>
          <div className={style.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
        <div className={style.materialItem}>
          <div className={style.zoom}>
            <Image
              width={300}
              height={300}
              src={"/images/Cashmere.jpg"}
              alt={"material"}
            />
            <div className={style.materialName}>
              <span>Cashmere</span>
            </div>
          </div>
          <div className={style.description}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};
