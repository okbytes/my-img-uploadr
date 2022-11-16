import * as React from "react"

interface Props {
	images: { name: string; src: string }[]
}

export function ImageGrid({ images }: Props) {
	return (
		<section className="grid grid-cols-2 gap-8">
			{images.map(img => (
				<img
					key={img.name}
					src={img.src}
					alt={img.name}
					className="h-72 w-full object-cover bg-black"
				/>
			))}
		</section>
	)
}
