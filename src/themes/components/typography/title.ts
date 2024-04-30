export const title_variants = [
    {
        props: {
            variant: 'title'
        },
        style: ({ ownerState }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${4 * ownerState.fontSize_koef}rem`,
            lineHeight: `${4.5  * ownerState.fontSize_koef}rem`,
            fontWeight: 600,
            whiteSpace: 'nowrap'
        })
    },
    {
        props: {
            variant: 'title', colored: true
        },
        style: ({ ownerState, theme }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${4 * ownerState.fontSize_koef}rem`,
            lineHeight: `${4.5  * ownerState.fontSize_koef}rem`,
            fontWeight: 600,
            whiteSpace: 'nowrap',
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
            fontSize: `${2.75 * ownerState.fontSize_koef}rem`,
            lineHeight: `${3.25  * ownerState.fontSize_koef}rem`
        })
    },
    {
        props: {
            variant: 'subtitle2'
        },
        style: ({ ownerState }: any) => ({
            fontFamily: '"Brygada 1918"',
            fontSize: `${2  * ownerState.fontSize_koef}rem`,
            lineHeight: `${2.3  * ownerState.fontSize_koef}rem`
        })
    },
]