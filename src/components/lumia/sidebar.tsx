import { useState } from "react";
import { 
  ChevronLeft, 
  Calendar 
} from "@untitledui/icons";
import { Button } from "@/components/ui/button";

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const menuItems = [
    { icon: "🏠", label: "Início", active: true, isEmoji: true },
    { icon: Calendar, label: "Mentorias", active: false },
    { icon: "💬", label: "Mensagens", active: false, isEmoji: true },
    { icon: "🔔", label: "Notificações", active: false, isEmoji: true },
    { icon: "📊", label: "Estatísticas", active: false, isEmoji: true },
    { icon: "🏆", label: "Ranking", active: false, isEmoji: true },
    { icon: "▶️", label: "Tutoriais", active: false, isEmoji: true },
  ];

  return (
    <div className={`bg-gray-800 border-r border-gray-700 transition-all duration-300 ${
      isCollapsed ? "w-16" : "w-64"
    }`}>
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">L</span>
              </div>
              <span className="text-white font-semibold text-lg">Lumia</span>
            </div>
          )}
          <Button
            color="tertiary"
            size="sm"
            iconLeading={ChevronLeft}
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`w-8 h-8 p-0 ${isCollapsed ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              item.active
                ? "bg-orange-500 text-white"
                : "text-gray-300 hover:bg-gray-700 hover:text-white"
            }`}
          >
            {item.isEmoji ? (
              <span className="text-lg flex-shrink-0">{item.icon}</span>
            ) : (
              <item.icon className="w-5 h-5 flex-shrink-0" />
            )}
            {!isCollapsed && (
              <span className="text-sm font-medium">{item.label}</span>
            )}
          </button>
        ))}
      </nav>

      {/* User section */}
      <div className="absolute bottom-4 left-4 right-4">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors">
          <span className="text-lg flex-shrink-0">🚪</span>
          {!isCollapsed && (
            <span className="text-sm font-medium">Sair da conta</span>
          )}
        </button>
      </div>
    </div>
  );
};
