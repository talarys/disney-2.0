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
			<div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/10 to-gray-300 dark:to-[#1a1c29]/80" />

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

export default MovieCardVertical
