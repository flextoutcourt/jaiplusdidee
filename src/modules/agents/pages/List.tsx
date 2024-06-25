import useSWR from "swr";
import MainLayout from "../../core/components/layouts/Main";
import AgentList from "../components/List";
import { fetcher } from "../../core/utils/functions";

export default function AgentIndex() {

  const {data} = useSWR('/api/agents', fetcher);

  return (
    <MainLayout>
        {data && <AgentList items={data} />}
    </MainLayout>
  );
}
