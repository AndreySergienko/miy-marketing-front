const CLASS_BLOCK_HIDE = 'animation-hide'
export function useAnimation($el: HTMLElement) {
    if (process.server) return;
    if (!$el) return;

    if (!$el.classList.contains(CLASS_BLOCK_HIDE)) return;

    const observer = new IntersectionObserver((items, observer) => {
        items.forEach(item => {
            if (item.isIntersecting) {
               $el.classList.remove(CLASS_BLOCK_HIDE)
                observer.unobserve($el)
            }
        })
    }, {
        threshold: 0.3
    })

    observer.observe($el)
}