import { Award, Medal, Star, Trophy } from 'lucide-react';
import { MAX_STARS, type Player } from '../types/leaderboard';
import { clampStars, sortPlayers } from '../utils/leaderboard';

interface LeaderboardProps { players: Player[]; title?: string; }

function StarRating({ count }: { count: number }) {
  const rating = clampStars(count);
  return <div aria-label={`${rating} de ${MAX_STARS} estrelas`} className="flex items-center gap-1" role="img">
    {Array.from({ length: MAX_STARS }, (_, index) => <Star aria-hidden="true" className={`size-3.5 ${index < rating ? 'text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.8)]' : 'text-slate-600'}`} fill={index < rating ? 'currentColor' : 'none'} key={index} />)}
  </div>;
}

function RankBadge({ rank }: { rank: number }) {
  const sharedClass = 'flex flex-col items-center justify-center text-[10px] font-extrabold';
  if (rank === 1) return <div className={`${sharedClass} text-yellow-400`}><Trophy aria-hidden="true" className="size-5" /><span>1º</span></div>;
  if (rank === 2) return <div className={`${sharedClass} text-slate-300`}><Award aria-hidden="true" className="size-5" /><span>2º</span></div>;
  if (rank === 3) return <div className={`${sharedClass} text-amber-600`}><Medal aria-hidden="true" className="size-5" /><span>3º</span></div>;
  return <span className="w-6 text-center text-sm font-bold text-slate-300">{rank}</span>;
}

export function Leaderboard({ players, title = 'Leaderboard' }: LeaderboardProps) {
  const sortedPlayers = sortPlayers(players);
  return <section aria-labelledby="leaderboard-title" className="w-full max-w-md rounded-3xl border-2 border-blue-600/40 bg-[#0a1128] p-5 text-white shadow-[0_0_30px_rgba(37,99,235,0.2)]">
    <div className="-mt-9 mb-6 flex justify-center"><div className="rounded-xl border-2 border-cyan-400 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 px-8 py-2 shadow-[0_0_15px_rgba(6,182,212,0.6)]"><h2 id="leaderboard-title" className="text-xl font-black uppercase italic tracking-widest">{title}</h2></div></div>
    <ol aria-label="Posições do ranking" className="flex flex-col gap-2">
      {sortedPlayers.map((player) => <li className="flex items-center gap-3 rounded-xl bg-blue-950/30 p-1.5 transition-colors hover:bg-blue-900/30" key={player.id}>
        <div aria-label={`${player.rank}º lugar`} className="flex w-6 justify-center"><RankBadge rank={player.rank} /></div>
        <img alt={`Avatar de ${player.nickname}`} className="size-9 shrink-0 rounded-full border-2 border-blue-400/60 bg-slate-800 object-cover" height={36} loading="lazy" src={player.avatarUrl} width={36} />
        <div className="flex min-w-0 flex-1 items-center justify-between gap-2 rounded-lg border border-blue-400/30 bg-gradient-to-r from-blue-600 to-blue-500 px-3 py-1.5 shadow-inner">
          <span className="max-w-[10rem] truncate text-xs font-bold tracking-wide" title={player.nickname}>{player.nickname}</span><StarRating count={player.stars} />
        </div>
      </li>)}
    </ol>
  </section>;
}
