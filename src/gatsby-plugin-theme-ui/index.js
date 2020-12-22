/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

// const darkBlue = `#007acc`
// const lightBlue = `#66E0FF`
// const blueGray = `#282c35`

// export default {
//     colors: {
//         text: blueGray,
//         primary: darkBlue,
//         heading: blueGray,
//     },
// }

import merge from "deepmerge"
//import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

const darkBackground = `#282B35`
const darkPrimary = `#F9A6C4`
const lightBackground = `#FFFFFF`
const lightPrimary = `#D23669`

export default {
    colors: {
        primary: lightPrimary,
        lightBackground: lightBackground,
        modes: {
            dark: {
                background: darkBackground,
                primary: darkPrimary,
            },
        },
    }
}