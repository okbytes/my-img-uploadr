import * as React from "react"

interface Props {
	setSearch: React.Dispatch<React.SetStateAction<string>>
}

export function SearchInput({ setSearch }: Props) {
	function handleSearch(e: React.FormEvent<HTMLInputElement>) {
		setSearch(e.currentTarget.value)
	}

	return (
		<input
			type="text"
			name="search"
			placeholder="Search images..."
			className="block w-full max-w-sm rounded-md border-gray-300 shadow-sm focus-visible:border-indigo-500 focus-visible:ring-indigo-500 sm:text-sm"
			onChange={handleSearch}
		/>
	)
}
