"use client"
import type { Movie } from "@/typings"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import { getImagePath } from "@/lib/getImagePath"
import { useModal } from "@/lib/useModal"

Autoplay.globalOptions = { delay: 8000 }

const CarouselsBanner = ({ movies }: { movies: Movie[] }) => {
	const { openModal, setMovie } = useModal()
	const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [
		Autoplay(),
	])
	return (
		<div className="overflow-hidden  relative cursor-pointer" ref={emblaRef}>
			<div className="flex">
				{movies.map(movie => (
					<div
						key={movie.title}
						onClick={() => {
							setMovie(movie)
							openModal()
						}}
						className="flex-[0_0_100%] min-w-0 relative"
					>
						<div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-900/20 to-transparent  " />
						<div className="absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-[#020817] " />
						<Image
							key={movie.id}
							src={getImagePath(movie.backdrop_path || movie.poster_path, true)}
							alt="movie backgroud"
							width={2560}
							height={1440}
						/>
						<div className="hidden md:inline absolute bottom-10 2xl:bottom-[460px] z-20 p-10 space-y-5 text-white  ">
							<h2 className="text-5xl font-bold max-w-xl z-50">
								{movie.title}
							</h2>
							<p className="max-w-xl line-clamp-3 z-50">{movie.overview}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default CarouselsBanner
