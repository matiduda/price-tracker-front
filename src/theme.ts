import { extendTheme } from '@chakra-ui/react'

export const colors = {
    background: '#000818',
    primary: '#FFDA59',
    secondary: '#807e1c',
    text: '#0C0C0C'
}

const theme = extendTheme({
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: colors.background,
                color: 'white',
                boxShadow: "inset 0 0 200px black",
                minH: "100vh",
                "&::-webkit-scrollbar": {
                    width: 0,
                },
            },
            // styles for the `a`
            a: {
                color: 'white',
                fontSize: "30pt",
                _hover: {
                    textDecoration: 'underline',
                },
            },
        },
    },
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: 'bold', // Normally, it is "semibold"
            },
            // 3. We can add a new visual variant
            variants: {
                'default-variant': {
                    bg: colors.primary,
                    color: colors.text,
                    _hover: {
                        bg: colors.secondary,
                    },
                },
            },
            // 6. We can overwrite defaultProps
            defaultProps: {
                size: 'md', // default is md
                variant: 'default-variant', // default is solid
            },
        },
    },
    fonts: {
        heading: `'Heading Font Name', serif`,
        body: `'Noto Sans', sans-serif`
    },
})

export default theme