export const load = async ({fetch, params}) => {
    const res = await fetch(`http://localhost:3000/`)
    const content = await res.json()
    return {content}
}
