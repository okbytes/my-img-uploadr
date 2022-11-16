import { nanoid } from "nanoid"

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const imgFileTypes = [
	"image/apng",
	"image/bmp",
	"image/gif",
	"image/jpeg",
	"image/pjpeg",
	"image/png",
	"image/svg+xml",
	"image/tiff",
	"image/webp",
	"image/x-icon",
]

export const images: { name: string; src: string }[] = [
	{ name: "art.jpeg", src: "art.jpeg" },
	{ name: "hurdle.jpeg", src: "hurdle.jpeg" },
	{ name: "waterfall.jpeg", src: "waterfall.jpeg" },
	{ name: "fireworks.jpeg", src: "fireworks.jpeg" },
]

export function validImgFile(file: File) {
	return imgFileTypes.includes(file.type)
}

export function transformNewFiles(newFiles: File[]) {
	let formData = new FormData()

	for (const file of newFiles) {
		if (validImgFile(file)) {
			formData.append(`${file.name}-${nanoid()}`, URL.createObjectURL(file))
		}
	}
	return formData
}
