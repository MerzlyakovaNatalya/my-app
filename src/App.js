import "./App.css";
import { Form } from "./components/form/Form";
import { MessageList } from "./components/messageList/MessageList";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header"></header>
      </div>
      <div>
        <Form></Form>
        <MessageList></MessageList>
      </div>
    </>
  );
}

export default App;
