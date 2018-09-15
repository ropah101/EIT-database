import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';

export const Eits = new Mongo.Collection('eits');

if(Meteor.isServer){
    Meteor.publish('eits',function eitsPublication(){
        return Eit.find();
    });
}
Meteor.methods({
    'eits.insert'(data){
        // form Validation
        check(data.first_name,String);
        check(data.surname,String);
        check(data.date_of_birth,String);
        check(data.country,String);
        check(data.gender,String)
        Eits.insert(data);
    },
})