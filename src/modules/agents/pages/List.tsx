import MainLayout from "../../core/components/layouts/Main";
import AgentList from "../components/AgentList";

export default function AgentIndex() {
  return (
    <MainLayout title="Agents list">
        <AgentList />
    </MainLayout>
  );
}
