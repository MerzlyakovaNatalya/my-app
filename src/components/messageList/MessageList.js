import { useForm } from "../../hooks/useForm";

export const MessageList = () => {
  const [value, messageList, { onChangeMessage, sendMessage }] = useForm();

  return (
    <div>
      {messageList.map((item) => (
        <div>
          <p>{item.author}</p>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
};
