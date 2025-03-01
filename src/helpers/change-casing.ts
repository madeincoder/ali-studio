export function pascalCaseToKebabCase(str: string) {
    return str.replace(/\B([A-Z])/g, '-$1').toLowerCase()
}

export const snakeToTitleCase = (value: string) => {
    return value
        .split('_')
        .filter((x) => x.length > 0)
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ')
}

export const kebabToTitleCase = (value: string) => {
    return value
        .split('-')
        .filter((x) => x.length > 0)
        .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
        .join(' ')
}

export const toSentenceCase = (value: string) => {
    return value.charAt(0).toUpperCase() + value.slice(1)
}

export const getFirstCharacter = (value: string) => {
    return value.charAt(0).toUpperCase()
}