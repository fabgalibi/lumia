import { useState } from "react";
import { SearchMd } from "@untitledui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const GoalsTable = () => {
  const [activeTab, setActiveTab] = useState("Lista de Tópicos");

  const goals = [
    {
      topic: "Ética no Serviço Público",
      studyType: "Estudos de caso",
      timeStudied: "2h30",
      performance: "84%",
      mentorCommand: "Enviar resumo dos principais dilemas éticos",
      status: "completed"
    },
    {
      topic: "Noções de Direito Administrativo",
      studyType: "Mapas mentais",
      timeStudied: "3h15",
      performance: "84%",
      mentorCommand: "Liberar mapa mental sobre atos administrativos",
      status: "completed"
    },
    {
      topic: "Legislação Previdenciária",
      studyType: "Simulado",
      timeStudied: "2h",
      performance: "84%",
      mentorCommand: "Atualizar aluno sobre mudanças recentes no INSS",
      status: "completed"
    },
    {
      topic: "Direito",
      studyType: "Revisão simulado",
      timeStudied: "2h45",
      performance: "84%",
      mentorCommand: "Aplicar quiz de revisão sobre princípios do Direito",
      status: "completed"
    },
    {
      topic: "Administração",
      studyType: "Resumo esquematizado",
      timeStudied: "3h",
      performance: "84%",
      mentorCommand: "Enviar checklist de temas mais cobrados",
      status: "completed"
    },
    {
      topic: "Perícia Médica",
      studyType: "Questões comentadas",
      timeStudied: "1h30",
      performance: "84%",
      mentorCommand: "Compartilhar estudo de caso prático",
      status: "completed"
    },
    {
      topic: "Noções de Direito Constitucional",
      studyType: "Vídeo-aula resumida",
      timeStudied: "3h30",
      performance: "84%",
      mentorCommand: "Liberar vídeo sobre controle de constitucionalidade",
      status: "completed"
    },
    {
      topic: "Serviço Social",
      studyType: "Teste rápido",
      timeStudied: "4h",
      performance: "84%",
      mentorCommand: "Recomendar leitura sobre políticas públicas",
      status: "completed"
    },
    {
      topic: "Contabilidade",
      studyType: "Exercício contextual",
      timeStudied: "2h15",
      performance: "84%",
      mentorCommand: "Enviar exercícios de balanço patrimonial",
      status: "completed"
    },
    {
      topic: "Instrumentalidade do Serviço Social",
      studyType: "Produção de relatório",
      timeStudied: "3h45",
      performance: "84%",
      mentorCommand: "Liberar roteiro de atuação profissional",
      status: "completed"
    }
  ];

  return (
    <div className="bg-gray-800 rounded-2xl border border-gray-700 shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white text-lg">📚</span>
          </div>
          <h2 className="text-white text-lg font-medium">Suas metas</h2>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab("Lista de Tópicos")}
            className={`px-4 py-3 text-sm font-semibold border-b-2 ${
              activeTab === "Lista de Tópicos"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-300"
            }`}
          >
            Lista de Tópicos
          </button>
          <button
            onClick={() => setActiveTab("Sugestões de revisão")}
            className={`px-4 py-3 text-sm font-semibold border-b-2 ${
              activeTab === "Sugestões de revisão"
                ? "border-orange-500 text-orange-500"
                : "border-transparent text-gray-300"
            }`}
          >
            Sugestões de revisão
          </button>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center gap-4">
          <div className="flex-1 max-w-md">
            <Input
              placeholder="Buscar"
              iconLeading={SearchMd}
              className="bg-gray-700 border-gray-600 text-white"
            />
          </div>
          <Button
            color="primary"
            size="md"
            className="bg-orange-600 hover:bg-orange-700"
          >
            <span className="mr-2">🔍</span>
            Filtrar por
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Status</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Tópicos</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Tipo de estudo</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Tempo estudado</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Desempenho (%)</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Comandos do mentor</th>
              <th className="text-left p-4 text-xs font-semibold text-gray-300 uppercase">Ações</th>
            </tr>
          </thead>
          <tbody>
            {goals.map((goal, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-750">
                <td className="p-4">
                  <div className="flex justify-center">
                    <div className={`w-3 h-3 rounded-full ${
                      goal.status === "completed" ? "bg-orange-500" : "bg-gray-600"
                    }`}></div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-white text-sm font-medium">{goal.topic}</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-300 text-sm">{goal.studyType}</span>
                </td>
                <td className="p-4">
                  <span className="text-gray-300 text-sm">{goal.timeStudied}</span>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-300 text-sm">{goal.performance}</span>
                    <div className="w-4 h-4 bg-gray-600 rounded-full flex items-center justify-center">
                      <span className="text-xs text-gray-400">?</span>
                    </div>
                  </div>
                </td>
                <td className="p-4">
                  <span className="text-blue-400 text-sm">{goal.mentorCommand}</span>
                </td>
                <td className="p-4">
                  <Button
                    color="tertiary"
                    size="xs"
                    className="w-8 h-8 p-0"
                  >
                    <span className="text-sm">👁️</span>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};