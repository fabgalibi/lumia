import { Clock } from "@untitledui/icons";

export const StatsCards = () => {
  const stats = [
    {
      icon: "📊",
      title: "Seu desempenho",
      value: "75,29%",
      change: "+15%",
      changeText: "comparado à semana passada",
      color: "text-green-500",
      isEmoji: true
    },
    {
      icon: "📚",
      title: "Metas resolvidas",
      value: "12 metas",
      change: null,
      changeText: null,
      color: "text-blue-500",
      isEmoji: true
    },
    {
      icon: "📚",
      title: "Horas estudadas",
      value: "13h25m",
      change: null,
      changeText: null,
      color: "text-purple-500",
      isEmoji: true
    },
    {
      icon: Clock,
      title: "Média de horas diárias",
      value: "2h25m",
      change: null,
      changeText: null,
      color: "text-orange-500",
      mentor: "Olivia Rhye",
      mentorText: "Mentora responsável"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div key={index} className="bg-gray-800 rounded-xl p-5 border border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center ${stat.color}`}>
                {stat.isEmoji ? (
                  <span className="text-lg">{stat.icon}</span>
                ) : (
                  <stat.icon className="w-5 h-5" />
                )}
              </div>
              {stat.change && (
                <div className="flex items-center gap-1">
                  <span className="text-green-500 text-sm">↗</span>
                  <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                </div>
              )}
            </div>
            <span className="text-gray-400 text-lg">↗</span>
          </div>
          
          <div className="space-y-1">
            <h3 className="text-gray-300 text-sm">{stat.title}</h3>
            <p className="text-white text-2xl font-semibold">{stat.value}</p>
            {stat.changeText && (
              <p className="text-gray-400 text-xs">{stat.changeText}</p>
            )}
          </div>

          {stat.mentor && (
            <div className="mt-4 pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-gray-600"></div>
                <span className="text-gray-300 text-sm">{stat.mentor}</span>
              </div>
              <p className="text-gray-400 text-xs mt-1">{stat.mentorText}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
