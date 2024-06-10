import { Competition as TCompetition } from "../api/competition/Competition";

export const COMPETITION_TITLE_FIELD = "id";

export const CompetitionTitle = (record: TCompetition): string => {
  return record.id?.toString() || String(record.id);
};
