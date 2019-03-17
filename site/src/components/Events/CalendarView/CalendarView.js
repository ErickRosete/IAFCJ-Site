import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './CalendarView.css'
import ModalEventView from '../ModalEventView/ModalEventView'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
require('moment/locale/es')

let formats = {
  agendaHeaderFormat: ({ start, end }, culture, localizer) =>
    localizer.format(start, 'll', culture) + ' — ' +
    localizer.format(end, 'll', culture)
}

const MyCalendar = (props) => {
  return (
    <div>
      {props.selectedEvent && <ModalEventView
        onHide={props.closeModal}
        event={props.selectedEvent}
        show={props.modalShow}
      />}

      <BigCalendar
        localizer={localizer}
        events={props.events}
        culture='es'
        onSelectEvent={event => props.showModal(event)}
        startAccessor="start"
        endAccessor="end"
        defaultDate={new Date(Date.now())}
        defaultView={BigCalendar.Views.MONTH}
        formats={formats}
      />
    </div>
  );
}


export default MyCalendar;