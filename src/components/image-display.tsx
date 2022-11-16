import * as React from "react"
import { ImageGrid } from "./image-grid"

interface Props {
	images: { name: string; src: string }[]
}

export function ImageDisplay({ images }: Props) {
	if (images.length === 0) {
		return <p className="text-gray-500">No images found.</p>
	}

	return (
		<>
			<h1 className="text-3xl font-medium">{images.length} images</h1>
			<ImageGrid images={images} />
		</>
	)
}
