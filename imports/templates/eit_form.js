import {Meteor} from 'meteor/meteor';
import {Templating} from 'meteor/templating';


import './eit_form.html';

Template.Eit_form.helpers({
    cohorts(){
        var startYear = 2008;
        var currentYear = (new Date()).getFullYear();
        var years = [];
        for(var i=startYear; i<=(currentYear+1); i++){
            var year = {
                year: i
            };
            if(i == currentYear){
                year.current = true
            }
            years.push(year);
        }
        return years;
    }
})