import React from "react";
import messageStyle from "./message.module.sass";
const Message: React.FC = () => {
  return (
    <div>
      <div className={messageStyle.message}>Simple is The Perfection</div>
    </div>
  );
};

export default Message;
