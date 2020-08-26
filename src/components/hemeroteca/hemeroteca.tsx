import React, { useState } from 'react';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

import { getDaysSince2020First, formatDate } from 'lib/utils';
import { Button } from '@material-ui/core';
import EventTwoToneIcon from '@material-ui/icons/EventTwoTone';
export interface HemerotecaProps {
  onDateChange: any;
}
export default function Hemeroteca({ onDateChange }: HemerotecaProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const handleDateChange = (selectedDate: any) => {
    setSelectedDate(selectedDate);
    var days = getDaysSince2020First(selectedDate);
    onDateChange(days);
  };
  return (
    <>
      <Button onClick={() => setIsOpen(true)} startIcon={<EventTwoToneIcon />}>
        {formatDate(selectedDate)}
      </Button>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DatePicker
          size="medium"
          disableToolbar
          minDate={new Date(2020, 6, 1)}
          disableFuture={true}
          autoOk
          onClose={() => setIsOpen(false)}
          open={isOpen}
          orientation="landscape"
          variant="dialog"
          openTo="date"
          value={selectedDate}
          onChange={handleDateChange}
          TextFieldComponent={() => null}
        />
      </MuiPickersUtilsProvider>
    </>
  );
}
