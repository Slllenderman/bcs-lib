import { button_theme } from "./button";
import { container_theme } from "./container";
import { link_theme } from "./link";

const t = {
    MuiTypography: {
        variants: [
            {
                props: {
                    variant: 'title'
                },
                style: ({ ownerState, theme }: any) => {
                    ownerState.children === 'Lol'
                    return {
                        fontSize: '144px',
                        [theme.breakpoints.up('md')]: {
                            fontSize: '2px',
                        }
                    }
                }
            }
        ]
    }
}

export const components_theme = Object.assign({},
    button_theme,
    link_theme,
    container_theme,
    t
)

