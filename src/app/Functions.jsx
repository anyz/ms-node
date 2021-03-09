import * as moment from 'moment';
import {forEach, uniqueId} from "lodash";

export const currentYear = () => {
    var date = new Date();
    return date.getFullYear();
};

export const currentDate = () => {
    var date = moment(new Date());
    return date.format('MM/DD/yyyy').toLocaleString();
};

export const currentMonth = () => {
    var date = moment(new Date());
    return date.format('MMMM, yyyy').toLocaleString();
};

export const startDate = () => {
    var date = new Date();
    var sDate = moment(new Date(date.getFullYear(), date.getMonth(), 1));
    if(date.getDate() > 15){
        sDate = moment(new Date(date.getFullYear(), date.getMonth(), 16));
    }
    return sDate.format('MM-DD-yyyy').toLocaleString();
};

export const endDate = () => {
    var date = new Date();
    var eDate = moment(new Date(date.getFullYear(), date.getMonth(), 16));
    if(date.getDate() > 15){
        eDate = moment(new Date(date.getFullYear(), date.getMonth()+1, 1));
    }
    return eDate.format('MM-DD-yyyy').toLocaleString();
};

export const processIqama = (array) => {
    var sDate = startDate();
    var eDate = endDate();
	var date = moment(new Date());
	var firstMonthCounter = date.format('MM').toLocaleString();
	var firstHalfCounter = "1";
	var secondMonthCounter=firstMonthCounter;
	var secondHalfCounter = "2";

    if((new Date()).getDate() > 15){
        var newDate = moment(new Date(date.getFullYear(), date.getMonth()+1, 1));
        secondMonthCounter = newDate.format('MM').toLocaleString();
        firstHalfCounter = 2;
        secondHalfCounter = 1;
    }

    var timeArr = [];

    forEach(array, (el) => {
        if(el.monthCounter === firstMonthCounter && el.halfCounter === firstHalfCounter){
            timeArr.push({ value: prepareRow(el.times[0], sDate)});
        }
        if(el.monthCounter === secondMonthCounter && el.halfCounter === secondHalfCounter){
            timeArr.push({ value: prepareRow(el.times[0], eDate)});
        }
    });
    return timeArr;
};

export const prepareRow = (obj, labelDate) => {
    obj.id = uniqueId('input-');
    obj.labelDate = labelDate;
    return obj;
};
