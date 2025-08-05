import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { LucideIcon } from "lucide-react"

interface DashboardCardProps {
  title: string
  count: number
  color: string
  icon: React.ReactElement<LucideIcon>
}

const DashboardCard = ({ title, count, color, icon }: DashboardCardProps) => {
  return (
    <Card className="dark:bg-slate-800 p-4">
      <CardContent className="flex gap-10 justify-between items-center">
        <div>
            <h3 className={`text-3xl mb-1 font-bold text-center ${color} dark:text-slate-200`}>{ count }</h3>
            <p className="font-semibold text-center text-gray-600 dark:text-slate-200">{ title }</p>
        </div>

        {icon }
      </CardContent>
    </Card>
  )
}

export default DashboardCard
