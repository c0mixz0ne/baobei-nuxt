export default function smoothScroll(id: string) {
    const target = document.querySelector(id)

    if (!target) {
        throw new Error('Target id is not defined')
    }

    target.scrollIntoView({ behavior: 'smooth' })
}
