import React from 'react';
import { Star, Trophy, Award, Medal } from 'lucide-react';
import type { Player } from '../types/leaderboard';

interface LeaderboardProps {
  players: Player[];
  title?: string;
}

// Subcomponente reutilizável para renderização de estrelas
const StarRating: React.FC<{ count: number; maxStars?: number }> = ({ count, maxStars = 5 }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => (
        <Star
          key={index}
          className={`w-3.5 h-3.5 ${
            index < count
              ? 'text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.8)]'
              : 'text-slate-600'
          }`}
          fill={index < count ? 'currentColor' : 'none'}
        />
      ))}
    </div>
  );
};

// Subcomponente de Posições (Top 3 ganha destaque visual)
const RankBadge: React.FC<{ rank: number }> = ({ rank }) => {
  switch (rank) {
    case 1:
      return (
        <div className="flex flex-col items-center justify-center">
          <Trophy className="w-5 h-5 text-yellow-400" />
          <span className="text-[10px] font-extrabold text-yellow-400">1º</span>
        </div>
      );
    case 2:
      return (
        <div className="flex flex-col items-center justify-center">
          <Award className="w-5 h-5 text-slate-300" />
          <span className="text-[10px] font-extrabold text-slate-300">2º</span>
        </div>
      );
    case 3:
      return (
        <div className="flex flex-col items-center justify-center">
          <Medal className="w-5 h-5 text-amber-600" />
          <span className="text-[10px] font-extrabold text-amber-600">3º</span>
        </div>
      );
    default:
      return (
        <span className="text-sm font-bold text-slate-300 w-5 text-center">
          {rank}
        </span>
      );
  }
};

export const Leaderboard: React.FC<LeaderboardProps> = ({
  players,
  title = 'LEADERBOARD',
}) => {
  const sortedPlayers = [...players].sort((a, b) => {
    if (a.rank !== b.rank) return a.rank - b.rank;
    return b.stars - a.stars;
  });

  return (
    <div className="w-full max-w-md mx-auto bg-[#0a1128] border-2 border-blue-600/40 rounded-3xl p-5 shadow-[0_0_30px_rgba(37,99,235,0.2)] text-white">
      {/* Header do Painel */}
      <div className="flex justify-center -mt-9 mb-6">
        <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 border-2 border-cyan-400 rounded-xl px-8 py-2 shadow-[0_0_15px_rgba(6,182,212,0.6)]">
          <h2 className="text-xl font-black tracking-widest text-white uppercase italic">
            {title}
          </h2>
        </div>
      </div>

      {/* Lista do Ranking */}
      <div className="flex flex-col gap-2">
        {sortedPlayers.map((player) => (
          <div
            key={player.id}
            className="flex items-center gap-3 p-1.5 rounded-xl bg-blue-950/30 hover:bg-blue-900/30 transition-all duration-200"
          >
            {/* Posição */}
            <div className="w-6 flex justify-center items-center pl-1">
              <RankBadge rank={player.rank} />
            </div>

            {/* Avatar */}
            <div className="relative flex-shrink-0">
              <img
                src={player.avatarUrl}
                alt={player.nickname}
                width={150}
                className="w-9 h-9 rounded-full object-cover border-2 border-blue-400/60 bg-slate-800"
              />
            </div>

            {/* Cartão de Dados do Jogador */}
            <div className="flex-1 flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-400/30 rounded-lg px-3 py-1.5 shadow-inner">
              <span className="font-bold text-xs tracking-wide text-white truncate max-w-[100px]">
                {player.nickname}
              </span>

              {/* Estrelas */}
              <StarRating count={player.stars} maxStars={6} />
            </div>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};