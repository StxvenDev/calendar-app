import React from 'react'

export const CalendarEvent = React.memo(({event}) => {
    const {title, user} = event;
  return (
    <>
        <strong>{ title }</strong>
        <span> - { user.name }</span>
    </>
  )
})

//No es conveniente usar el memo en el punto inicial de la aplicacion, pero a medida que crezca la entrada de eventos sera util
