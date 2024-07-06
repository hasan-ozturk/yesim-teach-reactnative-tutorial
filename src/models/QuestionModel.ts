import { Realm } from '@realm/react';

export class QuestionModel extends Realm.Object {
    static schema = {
        name: 'Question',
        properties: {
            name: 'string',
            description: 'string',
        },
    }
}


export class CategoryModel extends Realm.Object {
    static schema = {
        name: 'Category',
        properties: {
            _id: { type: "objectId", default: () => new Realm.BSON.ObjectId() },
            name: 'string',
            description: 'string',
        },
        primaryKey: '_id',
    }
}