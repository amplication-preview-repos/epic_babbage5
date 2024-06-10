import { SortOrder } from "../../util/SortOrder";

export type PhotoOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
