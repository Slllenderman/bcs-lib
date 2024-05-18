export const h_variants = [
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
            fontWeight: 500
        })
    },
]