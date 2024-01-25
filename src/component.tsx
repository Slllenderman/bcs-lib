import React from 'react';
import { IConferenceDateWidget } from "@bauman-conference-library/interface/dist/confrence-date-widget";

export const ConferenceDateWidget = (props: IConferenceDateWidget) =>{
  return (
    <div>{props.date.toString()}</div>
  )
}