import Calendar from '@/components/Calendar'
import { DateTime } from '@/utils/types'
import React from 'react'

function CalendarPage() {
  return (
    <div>
        <Calendar date={{
        justDate: null,
        dateTime: null
      }} setDate={function (value: React.SetStateAction<DateTime>): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}

export default CalendarPage

//4 видео джош