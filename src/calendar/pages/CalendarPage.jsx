import {Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { Navbar } from '../components/Navbar'
import { getMessagesES, localizer } from '../../helpers'


export const CalendarPage = () => { 
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
            culture='es'
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 64px)' }}
            messages={getMessagesES()}
        />
    </>
  )
}
