import * as React from "react"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"

import { ImageDisplay } from "./components/image-display"
import { SearchInput } from "./components/search-input"
import { UploadButton } from "./components/upload-button"
import { useDebounce } from "./hooks/use-debounce"
import { getImages, searchQueryFn, uploadImages } from "./utils/api-fns"
import { transformNewFiles, validImgFile } from "./utils/helpers"

export function App() {
	const [_search, setSearch] = React.useState("")
	const search = useDebounce<string>(_search, 500)

	const queryClient = useQueryClient()

	const imagesQuery = useQuery<{ name: string; src: string }[]>({
		queryKey: ["getImages"],
		queryFn: getImages,
		staleTime: Infinity,
	})

	const searchQuery = useQuery<{ name: string; src: string }[]>({
		queryKey: ["search", search],
		queryFn: () => searchQueryFn(search),
		enabled: !!search,
	})

	const { mutate: uploadMutate } = useMutation<string[], string, FormData>({
		mutationFn: uploadImages,
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["getImages"] })
		},
	})

	const handleUpload = React.useCallback(
		(e: React.FormEvent<HTMLInputElement>) => {
			const imgFiles: File[] = []
			// can't use .map on a file list,
			// but it has an iterator
			for (const file of e.currentTarget.files || []) {
				if (validImgFile(file)) {
					imgFiles.push(file)
				}
			}
			if (imgFiles.length > 0) {
				uploadMutate(transformNewFiles(imgFiles))
			}
		},
		[uploadMutate]
	)

	const isLoading = imagesQuery.isLoading || (searchQuery.isFetching && searchQuery.isLoading)

	const searchedImg = searchQuery.data || []
	const allImg = imagesQuery.data || []

	return (
		<div className="mx-auto max-w-4xl py-12">
			<div className="flex mb-6">
				<div className="flex-1">
					<SearchInput setSearch={setSearch} />
				</div>
				<UploadButton handleUpload={handleUpload} />
			</div>
			<main className="pt-6 space-y-8">
				{isLoading ? (
					<p>Loading...</p>
				) : (
					<ImageDisplay images={search ? searchedImg : allImg} />
				)}
			</main>
		</div>
	)
}
