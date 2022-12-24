import { useEffect, useState } from 'react';

export function useDebounce(value: string, delay: number = 300) {
    const [debounce, setDebounce] = useState(value)

    useEffect(() => {
    const handlerTimer = setTimeout(() => setDebounce(value), delay)
    return () => clearTimeout(handlerTimer)
    }, [value, delay])
    return debounce
}