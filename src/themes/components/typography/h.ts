export const h_variants = [
    {
        props: {
            weighted: true
        },
        style: {
            fontWeight: '500 !important'
        }
    },
    {
        props: {
            variant: 'h1'
        },
        style: ({ ownerState }: any) => ({
            fontSize: `${ownerState.fontK ? 1.5 * ownerState.fontK : 1.5}rem`,
            lineHeight: `${ownerState.fontK ? 1.8  * ownerState.fontK : 1.8}rem`,
            fontWeight: 400
        })
    },
    {
        props: {
            variant: 'h2'
        },
        style: ({ ownerState }: any) => ({
            fontSize: `${ownerState.fontK ? 1.25  * ownerState.fontK : 1.25}rem`,
            lineHeight: `${ownerState.fontK ? 1.5  * ownerState.fontK : 1.5}rem`,
            fontWeight: 400
        })
    },
    {
        props: {
            variant: 'h3'
        },
        style: ({ ownerState }: any) => ({
            fontSize: `${ownerState.fontK ? 1.1  * ownerState.fontK : 1.1}rem`,
            lineHeight: `${ownerState.fontK ? 1.15  * ownerState.fontK : 1.15}rem`,
            fontWeight: 400
        })
    },
    {
        props: {
            variant: 'h4'
        },
        style: ({ theme, ownerState }: any) => ({
            fontSize: `${ownerState.fontK ? 1  * ownerState.fontK : 1}rem`,
            lineHeight: `${ownerState.fontK ? 1.18  * ownerState.fontK : 1.18}rem`,
            fontWeight: 400,
            color: theme.palette.text.grey
        })
    },
    {
        props: {
            variant: 'h5'
        },
        style: ({ theme, ownerState }: any) => ({
            fontSize: `${ownerState.fontK ? 0.7  * ownerState.fontK : 0.7}rem`,
            lineHeight: `${ownerState.fontK ? 1  * ownerState.fontK : 1}rem`,
            fontWeight: 400,
            color: theme.palette.text.grey
        })
    },
]