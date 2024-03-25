import { Genres } from "@/typings"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const GenreDropdown = async () => {
	const url = "https://api.themoviedb.org/3/genre/movie/list?language=en"
	const options: RequestInit = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	}
	const response = await fetch(url, options)
	const data = (await response.json()) as Genres
	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="text-white flex justify-center items-center">
				Genres <ChevronDown className="ml-1" />
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuLabel>Select a Genre</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{data.genres.map((genre) => (
					<Link key={genre.id} href={`/genre/${genre.id}?genre=${genre.name}`}>
						<DropdownMenuItem>{genre.name}</DropdownMenuItem>
					</Link>
				))}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default GenreDropdown
