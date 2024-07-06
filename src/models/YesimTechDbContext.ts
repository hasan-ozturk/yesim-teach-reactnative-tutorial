import { createRealmContext } from "@realm/react";
import { CategoryModel, QuestionModel } from "./QuestionModel";

export const YesimTechDbContext = createRealmContext({
    schema: [QuestionModel, CategoryModel]
});