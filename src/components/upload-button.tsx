import * as React from "react"

interface Props {
	handleUpload: (e: React.FormEvent<HTMLInputElement>) => void
}

export function UploadButton({ handleUpload }: Props) {
	return (
		<label
			// TODO: ensure keyboard focus then click triggers file dialog
			tabIndex={0}
			htmlFor="img-upload"
			className="cursor-pointer inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium uppercase text-white shadow-sm hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
		>
			<input
				name="img-upload"
				id="img-upload"
				hidden
				type="file"
				accept="image/*"
				multiple
				onChange={handleUpload}
			/>
			<span>Upload</span>
		</label>
	)
}
