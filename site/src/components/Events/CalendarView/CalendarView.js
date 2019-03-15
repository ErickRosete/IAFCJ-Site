import React from 'react'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './CalendarView.css'

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer
require('moment/locale/es')

let formats = {
  agendaHeaderFormat:  ({ start, end }, culture, localizer) =>
  localizer.format(start, 'll', culture) + ' — ' +
  localizer.format(end, 'll', culture)
}


const MyCalendar = props => (
  <div>
    <BigCalendar
      localizer={localizer}
      events={props.events}
      culture='es'
      startAccessor="start"
      endAccessor="end"
      defaultDate={new Date(Date.now())}
      defaultView={BigCalendar.Views.MONTH}
      formats= {formats}
    />
  </div>
)

export default MyCalendar;