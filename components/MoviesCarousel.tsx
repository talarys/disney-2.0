import { Movie } from "@/typings"
import MovieCard from "./MovieCard"

type Props = {
	title?: string
	movies: Movie[]
}
const MoviesCarousel = ({ movies, title }: Props) => {
	return (
		<div className="z-50">
			<h2 className="text-xl font-bold px-10 py-2">{title}</h2>

			<div
				className={
					"flex space-x-4  overflow-scroll scrollbar-hide px-5 lg:px-10 py-5"
				}
			>
				{movies?.map(movie => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	)
}

export default MoviesCarousel
