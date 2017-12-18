import React from "react";
import TimePicker from "material-ui/TimePicker";

const TimePickerExampleStep = () => (
  <div>
    <TimePicker hintText="Reservations every 30 minutes" minutesStep={30} />
  </div>
);

export default TimePickerExampleStep;
