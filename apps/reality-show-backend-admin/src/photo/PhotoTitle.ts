import { Photo as TPhoto } from "../api/photo/Photo";

export const PHOTO_TITLE_FIELD = "id";

export const PhotoTitle = (record: TPhoto): string => {
  return record.id?.toString() || String(record.id);
};
