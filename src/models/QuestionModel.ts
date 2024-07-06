import { Realm } from '@realm/react';

export class QuestionModel extends Realm.Object<QuestionModel> {
    name!: string;
    description!: string;

    constructor(realm: Realm, name: string, description: string) {
        super(realm, { name, description });
    }
}