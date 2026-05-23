import DashboardLayout from "../layouts/DashboardLayout";
import MapView from "../components/MapView";
import SOSPanel from "../components/SOSPanel";
import StatCard from "../components/StatCard";

function Dashboard() {
  return (
    <DashboardLayout>
      <div className="dashboard-content">
        <div className="top-section">
          <StatCard title="Active SOS" value="24" />
          <StatCard title="Safe Shelters" value="12" />
          <StatCard title="Danger Zones" value="5" />
        </div>

        <div className="map-section">
          <MapView />
        </div>

        <div className="bottom-section">
          <SOSPanel />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;