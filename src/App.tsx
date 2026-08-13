import { useState } from 'react';
import { Leaderboard } from './components/Leaderboard';
import { LeaderboardChart } from './components/LeaderboardChart';
import { mockTeamPlayers } from './mock/players';
import { LayoutGrid, BarChart2 } from 'lucide-react';

export function App() {
  const [viewMode, setViewMode] = useState<'both' | 'list' | 'chart'>('both');

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8 flex flex-col items-center">
      {/* Header do Painel */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase">
          Ranking da Equipe
        </h1>
        <p className="text-slate-400 text-sm mt-1">Acompanhamento visual de performance</p>

        {/* Chaveador de Visão (Filtro) */}
        <div className="flex gap-2 justify-center mt-4 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('both')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'both' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <LayoutGrid className="w-3.5 h-3.5" /> Ambos
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            Lista
          </button>
          <button
            onClick={() => setViewMode('chart')}
            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 ${
              viewMode === 'chart' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
            }`}
          >
            <BarChart2 className="w-3.5 h-3.5" /> Gráfico
          </button>
        </div>
      </header>

      {/* Grid de Conteúdo Responsivo */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {(viewMode === 'both' || viewMode === 'list') && (
          <div className="w-full flex justify-center">
            <Leaderboard players={mockTeamPlayers} />
          </div>
        )}

        {(viewMode === 'both' || viewMode === 'chart') && (
          <div className="w-full">
            <LeaderboardChart players={mockTeamPlayers} />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;