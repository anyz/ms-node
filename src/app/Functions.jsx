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
    var todaysDate = new Date();
	var date = moment(todaysDate);
	var firstMonthCounter = date.format('MM').toLocaleString();
	var firstHalfCounter = "1";
	var secondMonthCounter=firstMonthCounter;
	var secondHalfCounter = "2";

    if(todaysDate.getDate() > 15){
        var newDate = moment(new Date(todaysDate.getFullYear(), todaysDate.getMonth()+1, 1));
        secondMonthCounter = newDate.format('MM').toLocaleString();
        firstHalfCounter = "2";
        secondHalfCounter = "1";
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

export const processIqamaNew = (array) => {

    var todaysDate = new Date();
	var date = moment(todaysDate);
    var currentMonth = date.format('MM').toLocaleString();
    var currentDay = date.format('DD').toLocaleString();

    var timeArr = [];
    var firstIndex = 0;

    forEach(array, (el) => {
        if(el.monthCounter === currentMonth && Number(el.start) <= Number(currentDay) && Number(el.end) >= Number(currentDay)) {
            var firstDate = moment(new Date(todaysDate.getFullYear(), Number(el.monthCounter)-1, Number(el.start)));
            firstIndex = Number(el.index);
            timeArr.push({ value: prepareRow(el.times[0], firstDate.format('MM-DD-yyyy').toLocaleString())});
        }
    });
    forEach(array, (el) => {
        if(Number(el.index) === firstIndex+1) {
            var firstDate = moment(new Date(todaysDate.getFullYear(), Number(el.monthCounter)-1, Number(el.start)));
            timeArr.push({ value: prepareRow(el.times[0], firstDate.format('MM-DD-yyyy').toLocaleString())});
        }
    });    
    return timeArr;
};

export const prepareRow = (obj, labelDate) => {
    obj.id = uniqueId('input-'+labelDate);
    obj.labelDate = labelDate;
    return obj;
};

