
import getConversations from "../actions/GetConversations";
import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";
import ConversationList from "./components/ConversationList";


export default async function ConverationsLayout({
  children
}: {
  children: React.ReactNode,
}) {
    const conversations = await getConversations();
    const users = await getUsers();
  return (
    // @ts-expect
    <Sidebar>
      <div className="h-full">
        <ConversationList
            users={users} 
            initialItems={conversations}
        />
        {children}
      </div>
    </Sidebar>
  );
}