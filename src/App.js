import Header from "./Components/Header/Header";
import UserName from "./Components/Shared/UserName/UserName";
import ConversationDisplay from "./Components/ConversationDisplay/ConversationDisplay";
import ConversationTypeBox from "./Components/Shared/TypeBox/ConversationTypeBox";

function App() {
  return (
    <div className=" mx-auto">
      <div className="w-[428px] relative bg-[#1B202D] rounded-[50px] h-[926px] mx-auto p-6">
        <Header />
        <UserName />
        <ConversationDisplay />
        <ConversationTypeBox />
      </div>
    </div>
  );
}

export default App;
