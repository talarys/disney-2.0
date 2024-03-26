"use client"
import { getImagePath } from "@/lib/getImagePath"
import { useModal } from "@/lib/useModal"
import type { Movie } from "@/typings"
import Image from "next/image"

const MovieCardVertical = ({ movie }: { movie: Movie }) => {
	const { setMovie, openModal } = useModal()
	return (
		<div
			onClick={() => {
				setMovie(movie)
				openModal()
			}}
			className="relative flex-shrink-0 cursor-pointer transform hover:scale-105 duration-200 ease-out hover:drop-shadow-lg z-30"
		>
			<Image
				alt={movie.title}
				width={1080}
				height={1920}
				src={getImagePath(movie.poster_path || movie.backdrop_path)}
				className="w-44 object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm"
			/>
		</div>
	)
}

export default MovieCardVertical
