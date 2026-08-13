import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from 'recharts';
import type { Player } from '../types/leaderboard';

interface LeaderboardChartProps {
  players: Player[];
}

// Custom Tooltip estilizado para o tema Dark
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data: Player = payload[0].payload;
    return (
      <div className="bg-slate-900 border border-blue-500/50 p-3 rounded-xl shadow-xl text-white">
        <div className="flex items-center gap-2 mb-1">
          <img
            src={data.avatarUrl}
            alt={data.nickname}
            className="w-6 h-6 rounded-full border border-blue-400"
          />
          <span className="font-bold text-sm text-blue-300">{data.nickname}</span>
        </div>
        <p className="text-xs text-slate-300">
          Posição: <span className="font-bold text-yellow-400">#{data.rank}</span>
        </p>
        <p className="text-xs text-slate-300">
          Pontos: <span className="font-mono font-bold text-cyan-400">{data.score.toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

export const LeaderboardChart: React.FC<LeaderboardChartProps> = ({ players }) => {
  // Ordena os jogadores para o gráfico exibir do 1º ao último no topo
  const chartData = [...players].sort((a, b) => a.rank - b.rank);

  // Paleta de cores baseada na posição do ranking
  const getBarColor = (rank: number) => {
    switch (rank) {
      case 1:
        return '#f59e0b'; // Amarelo/Ouro
      case 2:
        return '#94a3b8'; // Prata
      case 3:
        return '#d97706'; // Bronze
      default:
        return '#2563eb'; // Azul padrão
    }
  };

  return (
    <div className="w-full h-[400px] bg-[#0a1128] border-2 border-blue-600/40 rounded-3xl p-4 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
      <h3 className="text-center font-black tracking-wider text-blue-400 uppercase italic mb-4 text-sm">
        Desempenho por Pontuação
      </h3>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" horizontal={false} />
          
          {/* Eixo Y com os Apelidos */}
          <YAxis
            dataKey="nickname"
            type="category"
            tick={{ fill: '#94a3b8', fontSize: 12, fontWeight: 600 }}
            axisLine={{ stroke: '#334155' }}
            tickLine={false}
            width={100}
          />
          
          {/* Eixo X com os Pontos */}
          <XAxis
            type="number"
            tick={{ fill: '#64748b', fontSize: 11 }}
            axisLine={{ stroke: '#334155' }}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(30, 58, 138, 0.2)' }} />

          {/* Barras dinâmicas */}
          <Bar dataKey="score" radius={[0, 8, 8, 0]} barSize={20}>
            {chartData.map((entry) => (
              <Cell key={`cell-${entry.id}`} fill={getBarColor(entry.rank)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};