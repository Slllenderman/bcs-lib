import { FC } from "react";
import { FCWC, props, Widget, WidgetsFactory } from "@bauman-conference-library/interface";

export class LibFactory implements WidgetsFactory {
  
    getNavbar(): FCWC<props.NavbarProps> {
        throw new Error("not implemented")
    }

    getConferenceShowcase(): FC<props.ConferenceShowcaseProps> {
        throw new Error("not implemented")
    }

    getConferenceDateWidget(): FC<props.ConferenceDateProps> {
        throw new Error("not implemented")
    }
  
    getConferenceInfoGrid(): FCWC<Widget> {
        throw new Error("not implemented")
    }

  }