import * as React from "react"

export function useDebounce<T>(value: T, delayMs: number): T {
	const [debouncedValue, setDebouncedValue] = React.useState<T>(value)
	React.useEffect(
		() => {
			// Update debounced value after delay
			const handler = setTimeout(() => {
				setDebouncedValue(value)
			}, delayMs)
			// Cancel the timeout if value changes (also on delay change or unmount)
			// This is how we prevent debounced value from updating if value is changed within the delay period. Timeout gets cleared and restarted.
			return () => {
				clearTimeout(handler)
			}
		},
		[value, delayMs] // Only re-call effect if value or delay changes
	)
	return debouncedValue
}
