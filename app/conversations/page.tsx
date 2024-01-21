import getConversations from "../actions/getConversations";
import getCurrentUser from "../actions/getCurrentUser";
import getUsers from "../actions/getUsers";
import Userbar from "../components/Userbar";
import ConversationList from "./components/ConversationList";
import DailyMissions from "./components/DailyMissions";

const Home = async () => {
  const conversations = await getConversations();
  const users = await getUsers();
  const currentUser = await getCurrentUser();

  return (
    <div className="w-full flex flex-col max-w-[1280px] px-2 justify-center py-4 items-center mx-auto">
      <Userbar currentUser={currentUser!} />
      <ConversationList users={users} initialItems={conversations} title="Mensagens" />
      <DailyMissions />
    </div>
  )
}

export default Home;
