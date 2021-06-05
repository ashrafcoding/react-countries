import React from "react"
export const themes = {
    dark: {
        color: "var(--mutual)",
        background: "var(--night-dbl)",
    },
    light: {
        color: "var(--light-vdbl)",
        background: "var(--mutual)"

    }
}

const themeContext = React.createContext(themes.dark)
export default themeContext