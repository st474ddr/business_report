import Picker from 'pickerjs';
import { Calendar } from '@fullcalendar/core';
import zhTwLocale from '@fullcalendar/core/locales/zh-tw';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

$(function () {
    'use strict';
    /*
    let basic_input = document.getElementById('basic_input');
    let basic_picker = new Picker(basic_input, {
        format: 'YYYY-MM-DD',
    });
    basic_picker.getDate(true);
    */
    let today = new Date();
    let calendar;
    let calendarEl = document.getElementById('calendar');

    calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        locales: [zhTwLocale],
        locale: 'zh-tw',
        initialView: 'dayGridMonth',
        initialDate: today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate(),
        themeSystem: 'bootstrap',
        selectable: true,
        editable: true,
        droppable: true,
        businessHours: true,
        nowIndicator: true,
        eventColor: '#3f51b5',

        headerToolbar: {
            left: 'prev,next today addEventButton',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
        customButtons: {
            addEventButton: {
                text: '新增事件',
                themeIcon: 'fa-plus',
                click: function () {
                    addEvent('');
                }
            }
        },
        dateClick: function (info) {
            addEvent(info.dateStr);
        },
        events: [{
            title: '午餐時間',
            start: '2021-11-12T12:00:00'
        }, {
            title: '會議',
            start: '2021-11-12T14:30:00'
        }, {
            title: '面試',
            start: '2021-11-22T14:30:00'
        }, {
            title: '面試',
            start: '2021-11-24T14:00:00'
        }, {
            title: '前往 google',
            url: 'http://google.com/',
            start: '2021-11-28'
        }]
    });

    calendar.render();

    $(document).on('click', '.modal-footer > .btn-primary', function(){
        saveEvent();
    })

    function addEvent(dateStr) {
        if (typeof dateStr !== 'undefined')
            $('#basic_input').val(dateStr);
        $('#eventModal').modal('show');
    }

    function saveEvent() {
        console.log($('#event-name').val());
        console.log($('#basic_input').val());
        let dateStr = $('#basic_input').val();
        let date = new Date(dateStr + 'T00:00:00'); // will be in local time

        if (!isNaN(date.valueOf())) { // valid?
            calendar.addEvent({
                title: $('#event-name').val(),
                start: date,
                allDay: true
            });
            console.info('您好，正更新中...');
            $('#eventModal').modal('hide');
        } else {
            console.log('無效日期');
        }
    }


});
