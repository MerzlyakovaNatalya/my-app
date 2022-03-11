import { useState } from "react";

export const useForm = () => {
  const [value, setValue] = useState("");
  const [messageList, setMessageList] = useState([]);

  const onChangeMessage = (e) => {
    setValue(e.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    const newMessage = [...messageList];
    newMessage.push({
      author: "user",
      text: event.target.value,
    });
    setMessageList(newMessage);
    resetForm();
  };

  const resetForm = () => {
    setValue("");
  };

  return [
    value,
    messageList,
    {
      onChangeMessage,
      sendMessage,
    },
  ];
};
