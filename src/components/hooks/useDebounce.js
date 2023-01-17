import { useState, useEffect, useRef } from "react"

export const useDebounce = (query, debounceTime) => {
    const [debouncedQuery, setDbouncedQuery] = useState(query);
    const timeoutRef =  useRef(null);
    useEffect(() => {
        timeoutRef.current = setTimeout(() => {
        setDbouncedQuery(query);
        }, debounceTime);
        return () => {
            clearTimeout(timeoutRef.current);
        }
    }, [query, debounceTime]);
    return debouncedQuery;
}