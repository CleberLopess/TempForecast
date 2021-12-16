export const Points = [350, 768, 1366, 1920]

export const BreackPoints = {
    MOBILE: `@media screen and (min-width: ${Points[0]}px)`,
    TABLET: `@media screen and (min-width: ${Points[1]}px)`,
    NOTEBOOK: `@media screen and (min-width: ${Points[2]}px)`,
    DESKTOP: `@media screen and (min-width: ${Points[3]}px)`,
}