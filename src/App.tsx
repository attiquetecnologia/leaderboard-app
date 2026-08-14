import { useState } from 'react';
import { Leaderboard } from './components/Leaderboard';
import { mockTeamPlayers } from './mock/players';

export function App() {
  const [viewMode] = useState<'both' | 'list' | 'chart'>('both');

  return (
    <main className="min-h-screen bg-slate-950 text-white p-4 md:p-8 flex flex-col items-center">
      {/* Header do Painel */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-black italic tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 uppercase">
          Ranking da Equipe
        </h1>
      </header>

      {/* Grid de Conteúdo Responsivo */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {(viewMode === 'both' || viewMode === 'list') && (
          <div className="w-full flex justify-center">
            <Leaderboard players={mockTeamPlayers} />
          </div>
        )}
      </div>
    </main>
  );
}

export default App;