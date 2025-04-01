import React from "react";
import { PopupWidget } from "react-calendly";

function Calendar() {
  return (
    <PopupWidget
      url="https://calendly.com/gurneer1223/30min"
      rootElement={document.getElementById("root")}
      text="Book a Session"
      textColor="#ffffff"
      color="#00a2ff"
    />
  );
}

export default Calendar;
