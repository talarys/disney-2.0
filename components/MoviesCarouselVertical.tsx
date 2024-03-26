import type { Movie } from "@/typings"
import MovieCard from "./MovieCard"

type Props = {
	title?: string
	movies: Movie[]
}
const MoviesCarouselVertical = ({ movies, title }: Props) => {
	return (
		<div className="z-30">
			<h2 className="text-xl font-bold px-10 py-2">{title}</h2>

			<div
				className={
					"flex overflow-scroll scrollbar-hide px-5 lg:px-10 py-5 flex-col space-x-0 space-y-12"
				}
			>
				{movies?.map(movie => (
					<div
						key={movie.id}
						className="flex flex-col space-y-5 mb-5 items-center lg:flex-row space-x-5 "
					>
						<MovieCard movie={movie} />
						<div className="max-w-2xl">
							<p className="font-bold">
								{movie.title} ({movie.release_date?.split("-")[0]})
							</p>
							<hr className="mb-3" />
							<p>{movie.overview}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default MoviesCarouselVertical
