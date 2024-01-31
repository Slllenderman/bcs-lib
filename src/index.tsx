import React, { FC } from 'react';
import { WidgetsFactory, ConferenceDateProps, NavbarProps} from '@bauman-conference-library/interface';

export const ConferenceDateWidget = (props: ConferenceDateProps): JSX.Element => {
  return (
    <div>
      <div>{props.format}</div>
      <div>{props.date.toString()}</div>
    </div>
  )
}

export class LibFactory implements WidgetsFactory {
  
  getConferenceDateWidget(): FC<ConferenceDateProps> {
    return ConferenceDateWidget;
  }

  getNavbar(): FC<NavbarProps> {
    throw new Error("not implemented")
  }

}