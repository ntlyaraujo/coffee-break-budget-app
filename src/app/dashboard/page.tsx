import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { TopBar } from "@/features";

const Dashboard = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/signin')
  }
  return <div>
    <TopBar />
  </div>;
};

export default Dashboard;