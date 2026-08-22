import { useEffect, useRef, useState } from 'react'

// Hook liviano para animar elementos al entrar en pantalla,
// sin dependencias externas. Respeta prefers-reduced-motion
// porque las transiciones CSS ya quedan neutralizadas en index.css.
export function useReveal(threshold = 0.2) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}
