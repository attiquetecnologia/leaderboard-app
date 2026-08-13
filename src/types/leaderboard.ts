export interface Player {
  id: string | number;
  rank: number;
  nickname: string;
  avatarUrl: string;
  score: number;
  stars: number; // 0 a 5
}