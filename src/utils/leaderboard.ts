import { MAX_STARS, type Player } from '../types/leaderboard';

export function clampStars(stars: number): number {
  return Math.max(0, Math.min(MAX_STARS, Math.floor(stars)));
}

export function sortPlayers(players: readonly Player[]): Player[] {
  return [...players].sort(
    (a, b) => a.rank - b.rank || b.stars - a.stars || String(a.id).localeCompare(String(b.id)),
  );
}
