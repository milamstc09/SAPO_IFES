document.addEventListener('DOMContentLoaded', function () {

    const calendarEl = document.getElementById('calendar');

    const calendar = new FullCalendar.Calendar(calendarEl, {

        locale:'pt-br',

        initialView:'dayGridMonth',

        height:470

    });

    calendar.render();

});