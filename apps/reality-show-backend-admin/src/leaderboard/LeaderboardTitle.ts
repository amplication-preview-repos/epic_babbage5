import { Leaderboard as TLeaderboard } from "../api/leaderboard/Leaderboard";

export const LEADERBOARD_TITLE_FIELD = "id";

export const LeaderboardTitle = (record: TLeaderboard): string => {
  return record.id?.toString() || String(record.id);
};
