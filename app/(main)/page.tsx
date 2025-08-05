import { Button } from "@/components/ui/button";
import DashboardCard from "@/components/dashboard/DashboardCard";
import AnalyticsChart from "@/components/dashboard/AnalyticsChart";
import PostsTable from "@/components/posts/PostsTable";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-5 mb-5">
        <DashboardCard title="Posts" count={100} color="text-green-700" icon={<Newspaper className="stroke-green-700 fill-green-700" size={50} />}/>
        <DashboardCard title="Categories" count={12} color="text-blue-700" icon={<Folder className="stroke-blue-700 fill-blue-700" size={50} />}/>
        <DashboardCard title="Users" count={750} color="text-orange-700" icon={<User className="stroke-orange-700 fill-orange-700" size={50} />}/>
        <DashboardCard title="Comments" count={1200} color="text-purple-700" icon={<MessageCircle className="stroke-purple-700 fill-purple-700" size={50} />}/>
      </div>
      <AnalyticsChart />
      <PostsTable title="Latest Posts" limit={5}/>
    </>
  );
}
