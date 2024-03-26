import MoviesCarousel from "@/components/MoviesCarousel"
import MoviesCarouselVertical from "@/components/MoviesCarouselVertical"
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies"
import { notFound } from "next/navigation"

type Props = {
	params: {
		term: string
	}
}
const SearchPage = async ({ params: { term } }: Props) => {
	if (!term) notFound()
	term = decodeURI(term)

	const movies = await getSearchedMovies(term)
	const popularMovies = await getPopularMovies()

	return (
		<div className="max-w-7xl mx-auto">
			<div className="flex flex-col space-y-4 mt-32">
				<h1 className="text-6xl font-bold px-10">Results for {term}</h1>
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
