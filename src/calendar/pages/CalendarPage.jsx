import {Calendar, dateFnsLocalizer} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import enUS from 'date-fns/locale/en-US'
import { Navbar } from '../components/Navbar'
import { addHours } from 'date-fns'

export const CalendarPage = () => {

    const locales = {
        'en-US': enUS,
      }
      
      const localizer = dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      });

      const events = [{
        title:'cumpleaños',
        notes: 'Hay que comprar mecatos',
        start : new Date(),
        end : addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'fernando'
        }
      }]

  return (
    <>
        <Navbar />
        <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 64px)' }}
        />
    </>
  )
}
