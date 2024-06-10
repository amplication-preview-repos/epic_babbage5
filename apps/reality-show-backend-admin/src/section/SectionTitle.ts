import { Section as TSection } from "../api/section/Section";

export const SECTION_TITLE_FIELD = "id";

export const SectionTitle = (record: TSection): string => {
  return record.id?.toString() || String(record.id);
};
