import { LogOut } from "lucide-react";

interface DevLogoutProps {
  onLogout: () => void;
}

const DevLogout = ({ onLogout }: DevLogoutProps) => {
  const handleLogout = () => {
    localStorage.removeItem("vara-dev-access");
    onLogout();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={handleLogout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg transition-colors text-sm"
        title="Exit Developer Mode"
      >
        <LogOut size={16} />
        Exit Dev Mode
      </button>
    </div>
  );
};

export default DevLogout; 