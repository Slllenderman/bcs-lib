export const title_variants = [
    {
        props: {
            variant: 'title'
        },
        style: ({ ownerState }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${ownerState.fontK ? 4 * ownerState.fontK : 4}rem`,
            lineHeight: `${ownerState.fontK ? 4.5  * ownerState.fontK : 4.5}rem`,
            fontWeight: 600,
            whiteSpace: 'nowrap'
        })
    },
    {
        props: {
            colored: true
        },
        style: ({ theme }: any) => ({
            fontStyle: 'Italic',
            color: theme.pallete.primary.main
        })
    },
    {
        props: {
            variant: 'subtitle1'
        },
        style: ({ ownerState }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${ownerState.fontK ? 2.75 * ownerState.fontK : 2.75}rem`,
            lineHeight: `${ownerState.fontK ? 3.25  * ownerState.fontK : 3.25}rem`,
            fontWeight: 600
        })
    },
    {
        props: {
            variant: 'subtitle2'
        },
        style: ({ ownerState }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${ownerState.fontK ? 2 * ownerState.fontK : 2}rem`,
            lineHeight: `${ownerState.fontK ? 2.3  * ownerState.fontK : 2.3}rem`,
        })
    },
]