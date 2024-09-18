import {Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { Navbar, CalendarEvent } from '../'
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
          name: 'Steven'
      }
    }];

    const eventStyleGetter = ( event, start, end, listSelected ) => {
        const style = {
            backgroundColor: '#347cF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        }
        return {
            style : {}
        }
    }

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
            eventPropGetter={ eventStyleGetter }
            components={{
                event: CalendarEvent
            }}
        />
    </>
  )
}
