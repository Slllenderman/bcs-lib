import React, { JSX } from "react"
import { props } from "@bauman-conference-library/interface"

export const Navbar = (props: props.NavbarProps): JSX.Element => {
    return (
        <div>
            {props.logo_name}
        </div>
    )
}