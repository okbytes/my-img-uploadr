import * as React from "react"
import { createRoot } from "react-dom/client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { App } from "./app"
import "./index.css"

if (import.meta.env.DEV) {
	// fire up the mock service worker to intercept api calls
	import("./mocks/browser").then(({ worker }) => {
		worker.start()
	})
}

const queryClient = new QueryClient()

const container = document.getElementById("root")
const root = createRoot(container!)
root.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</React.StrictMode>
)
