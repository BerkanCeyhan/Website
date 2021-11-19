import { extendTheme } from "@chakra-ui/react"

// 2. Add your color mode config
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const colors = {
    brand:
        {
            50: '#defdf5',
            100: '#bbf1e7',
            200: '#96e6d9',
            300: '#6edacd',
            400: '#49cfc3',
            500: '#30b6a1',
            600: '#208e75',
            700: '#10664d',
            800: '#003e29',
            900: '#00170d',
        },
}

// 3. extend the theme
const theme = extendTheme({config,
    styles: {
        global: (props) => ({
            "html, body": {

                color: props.colorMode === "dark" ? "white" : "gray.600",
                lineHeight: "tall",
            },
            a: {
                color: props.colorMode === "dark" ? "teal.300" : "teal.500",
            },
        }),
    },
    fonts: {
        heading: "",
        body: "",
    },
})

export default theme