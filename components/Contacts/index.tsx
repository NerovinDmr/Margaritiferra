import Image from "next/image";
import React from "react";
import style from "./style.module.scss";

export const Contacts: React.FC = () => {
  const [name, setName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [textArea, setTextArea] = React.useState<string>("");
  return (
    <div className={style.contacts}>
      <div className={style.contactBlock}>
        <div className={style.contactInfo}>
          <h2>Any questions?</h2>
          <p> just messege to us </p>
        </div>
        <div className={style.contactForm}>
          <form>
            <label htmlFor="name ">Your name</label>
            <input
              placeholder="enter your name "
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <label htmlFor=" e-mail ">e-mail</label>
            <input
              placeholder="enter your e-mail "
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor=" Phone ">Phone number</label>
            <input placeholder="enter your phone " type="text" value={phone} onChange={(e) => {
                setPhone(e.target.value);
              }} />
            <label htmlFor="textarea ">messege</label>
            <textarea placeholder="enter your messege " value={textArea}  onChange={(e) => {
                setTextArea(e.target.value);
              }} />
            <div className={style.btnSend}> Send</div>
          </form>
        </div>
      </div>
    </div>
  );
};
