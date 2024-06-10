import { CompetitionWhereInput } from "./CompetitionWhereInput";
import { CompetitionOrderByInput } from "./CompetitionOrderByInput";

export type CompetitionFindManyArgs = {
  where?: CompetitionWhereInput;
  orderBy?: Array<CompetitionOrderByInput>;
  skip?: number;
  take?: number;
};
