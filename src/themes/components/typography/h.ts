export const h_variants = [
    {
        props: {
            variant: 'h1'
        },
        style: ({ ownerState }: any) => ({
            fontSize: `${1.5  * ownerState.fontSize_koef}rem`,
            lineHeight: `${1.8  * ownerState.fontSize_koef}rem`,
            fontWeight: 400
        })
    },
    {
        props: {
            variant: 'h2'
        },
        style: ({ ownerState }: any) => ({
            fontSize: `${1.25  * ownerState.fontSize_koef}rem`,
            lineHeight: `${1.5  * ownerState.fontSize_koef}rem`,
            fontWeight: 400
        })
    },
]