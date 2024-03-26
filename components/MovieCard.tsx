import { getImagePath } from "@/lib/getImagePath"
import type { Movie } from "@/typings"
import Image from "next/image"

const MovieCard = ({ movie }: { movie: Movie }) => {
	return (
		<div className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 duration-200 ease-out hover:drop-shadow-lg">
			<div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1a1c29]/80 z-10" />

			{/* <p className="absolute z-20 bottom-5 left-5 ">{movie.title}</p> */}

			<Image
				alt={movie.title}
				width={1080}
				height={1920}
				src={getImagePath(movie.poster_path || movie.backdrop_path)}
				className="w-fit h-[300px] object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
			/>
		</div>
	)
}

export default MovieCard
