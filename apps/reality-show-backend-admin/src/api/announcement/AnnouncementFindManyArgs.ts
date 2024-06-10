import { AnnouncementWhereInput } from "./AnnouncementWhereInput";
import { AnnouncementOrderByInput } from "./AnnouncementOrderByInput";

export type AnnouncementFindManyArgs = {
  where?: AnnouncementWhereInput;
  orderBy?: Array<AnnouncementOrderByInput>;
  skip?: number;
  take?: number;
};
