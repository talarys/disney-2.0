import MoviesCarousel from "@/components/MoviesCarousel"
import MoviesCarouselVertical from "@/components/MoviesCarouselVertical"
import { getDiscoverMovies, getPopularMovies } from "@/lib/getMovies"
import { notFound } from "next/navigation"

type Props = {
	params: {
		id: string
	}
	searchParams: {
		genre: string
	}
}
const SearchPage = async ({
	params: { id },
	searchParams: { genre },
}: Props) => {
	if (!id) notFound()
	id = decodeURI(id)
	genre = decodeURI(genre)

	const movies = await getDiscoverMovies(id)
	const popularMovies = await getPopularMovies()

	return (
		<div className="max-w-7xl mx-auto mt-32">
			<div className="flex flex-col space-y-4">
				<h1 className="text-6xl font-bold px-10">Results for {genre}</h1>
				<MoviesCarouselVertical movies={movies} />
			</div>
			<div className="mt-10 mb-10">
				<h1 className="text-6xl font-bold px-10">Popular Movies</h1>
				<MoviesCarousel movies={popularMovies} />
			</div>
		</div>
	)
}

export default SearchPage
