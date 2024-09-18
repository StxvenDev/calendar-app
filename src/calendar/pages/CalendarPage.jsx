import { useState } from 'react'
import {Calendar} from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { Navbar, CalendarEvent, CalendarModal } from '../'
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

    const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

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

    const onDoubleClick = ( event ) => {
        console.log({ doubleClick: event });
    }

    const onSelect = ( event ) => {
        console.log({ click: event });
    }

    const onViewChanged = ( event ) => {
        localStorage.setItem('lastView', event);
    }

  return (
    <>
        <Navbar />
        <Calendar
            culture='es'
            localizer={localizer}
            events={events}
            defaultView={lastView}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc(100vh - 64px)' }}
            messages={getMessagesES()}
            eventPropGetter={ eventStyleGetter }
            components={{
                event: CalendarEvent
            }}
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelect }
            onView={ onViewChanged }
        />
        <CalendarModal />
    </>
  )
}
