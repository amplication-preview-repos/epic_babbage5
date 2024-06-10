import { Announcement as TAnnouncement } from "../api/announcement/Announcement";

export const ANNOUNCEMENT_TITLE_FIELD = "id";

export const AnnouncementTitle = (record: TAnnouncement): string => {
  return record.id?.toString() || String(record.id);
};
