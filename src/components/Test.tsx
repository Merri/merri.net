import { createSignal, onCleanup } from 'solid-js'

export function Test() {
	const [count, setCount] = createSignal<number>(0)
	const timer = setInterval(() => setCount(count() + 1), 1000)
	onCleanup(() => clearInterval(timer))

	return <div>Test {count()}</div>
}
