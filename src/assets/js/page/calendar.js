import Picker from 'pickerjs';
import FullCalendar from 'fullcalendar';
$(function(){

    'use strict';
    
    let basic_input = document.getElementById('basic_input');
    let basic_picker = new Picker(basic_input, {
        format: 'YYYY-MM-DD',
    });
    basic_picker.getDate(true);



    let calendar;
    let calendarEl = document.getElementById('calendar');
  
    calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2021-12-07',
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
                text: 'add event',
                icon: 'fa-plus',
                click: function() {
                    addEvent('');
                }
            }
        },
        dateClick: function(info) {
            addEvent(info.dateStr);
        },
        events: [{
            title: '午餐時間',
            start: '2021-12-12T12:00:00'
        }, {
            title: '會議',
            start: '2021-12-12T14:30:00'
        }, {
            title: '前往 google',
            url: 'http://google.com/',
            start: '2021-12-28'
        }]
    });

    calendar.render();

    
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
            console.log('Invalid date.');
        }
    }

    
});
