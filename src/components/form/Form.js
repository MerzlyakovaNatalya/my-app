import { useForm } from "../../hooks/useForm";

export const Form = () => {
  const [value, messageList, { onChangeMessage, sendMessage }] = useForm();

  return (
    <>
      <div className="wrap">
        <form onSubmit={sendMessage}>
          <input type="text" value={value} onChange={onChangeMessage}>
            Сообщение
          </input>
          <button>Написать</button>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </>
  );
};
