import { useState } from 'react';
import { Leaderboard } from './components/Leaderboard';
import { mockTeamPlayers } from './mock/players';
import { MAX_STARS, type Player } from './types/leaderboard';
import { clampStars, sortPlayers } from './utils/leaderboard';

type ViewMode = 'both' | 'list' | 'chart';

function ScoreChart({ players }: { players: Player[] }) {
  return <section aria-labelledby="chart-title" className="w-full max-w-md rounded-3xl border-2 border-blue-600/40 bg-[#0a1128] p-5 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
    <h2 id="chart-title" className="mb-4 text-xl font-black uppercase italic tracking-widest text-cyan-300">Estrelas por jogador</h2>
    <ol className="space-y-2">
      {sortPlayers(players).map((player) => {
        const score = clampStars(player.stars);
        return <li className="grid grid-cols-[7rem_1fr_auto] items-center gap-2 text-xs" key={player.id}>
          <span className="truncate font-semibold" title={player.nickname}>{player.nickname}</span>
          <div aria-label={`${score} de ${MAX_STARS} estrelas`} className="h-3 overflow-hidden rounded-full bg-slate-800" role="img"><div className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${(score / MAX_STARS) * 100}%` }} /></div>
          <span className="font-bold text-amber-300">{score}/{MAX_STARS}</span>
        </li>;
      })}
    </ol>
  </section>;
}

export function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('both');
  const views: { label: string; value: ViewMode }[] = [{ label: 'Ambos', value: 'both' }, { label: 'Lista', value: 'list' }, { label: 'Gráfico', value: 'chart' }];

  return <main className="min-h-screen bg-slate-950 p-4 text-white md:p-8">
    <header className="mx-auto mb-8 max-w-6xl text-center"><h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-3xl font-black uppercase italic tracking-widest text-transparent">Ranking da Equipe</h1>
      <div aria-label="Visualização" className="mt-5 inline-flex rounded-lg border border-blue-400/40 p-1" role="group">
        {views.map((view) => <button aria-pressed={viewMode === view.value} className={`rounded-md px-3 py-1.5 text-sm font-bold transition-colors ${viewMode === view.value ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-800'}`} key={view.value} onClick={() => setViewMode(view.value)} type="button">{view.label}</button>)}
      </div>
    </header>
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-start justify-items-center gap-8 lg:grid-cols-2">
      {(viewMode === 'both' || viewMode === 'list') && <Leaderboard players={mockTeamPlayers} />}
      {(viewMode === 'both' || viewMode === 'chart') && <ScoreChart players={mockTeamPlayers} />}
    </div>
  </main>;
}

export default App;
