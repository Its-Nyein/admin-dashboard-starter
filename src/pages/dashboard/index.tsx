import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardCard } from "./features/dashboard-card";
import { DashboardOverview } from "./features/dashboard-overview";
import { DashboardRecentSales } from "./features/dashboard-recent-sales";

export function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardCard />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <Card className="col-span-1 lg:col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <DashboardOverview />
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-3">
          <CardHeader>
            <CardTitle>Recent Sales</CardTitle>
            <CardDescription>You made 265 sales this month.</CardDescription>
          </CardHeader>
          <CardContent>
            <DashboardRecentSales />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
