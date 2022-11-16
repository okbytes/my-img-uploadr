export async function getImages() {
	const res = await fetch("/api/images")
	const data = await res.json()
	return data
}

export async function searchQueryFn(search: string) {
	const res = await fetch(`/api/search?search=${search}`)
	const data = await res.json()
	return data
}

export async function uploadImages(formData: FormData) {
	const res = await fetch("/api/upload", {
		method: "POST",
		body: formData,
	})
	const data = await res.json()
	return data
}
