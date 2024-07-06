import { createRealmContext } from "@realm/react";
import { QuestionModel } from "./QuestionModel";

export const YesimTechDbContext = createRealmContext({
    schema: [QuestionModel]
});