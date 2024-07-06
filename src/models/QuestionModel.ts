import { Realm } from '@realm/react';

export class QuestionModel extends Realm.Object{
    static schema = {
        name: 'Question',
        properties: {
            name: 'string',
            description: 'string',
        }
    }

}