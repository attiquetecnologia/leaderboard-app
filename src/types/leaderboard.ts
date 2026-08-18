export const MAX_STARS = 5;

export interface Player {
  id: string | number;
  rank: number;
  nickname: string;
  avatarUrl: string;
  /** Pontuação de 0 a MAX_STARS. */
  stars: number;
}
