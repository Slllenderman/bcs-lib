import React from 'react'
import { props } from "@bauman-conference-library/interface"

export const ConferenceDate = (props: props.ConferenceDateProps): JSX.Element => {
    return (
        <div>
            {props.date.toString()}        
        </div>
    )
}