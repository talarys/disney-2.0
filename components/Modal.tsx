"use client"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { useModal } from "@/lib/useModal"
import { useEffect, useState } from "react"
import ReactPlayer from "react-player/youtube"

export function Modal() {
	const [movieTrailer, setMovieTrailer] = useState()
	const { isOpen, closeModal, movie } = useModal()

	useEffect(() => {
		fetch(`/movie/trailer?id=${movie.id}`, {
			method: "GET",
		})
			.then(res => res.json())
			.then(t => setMovieTrailer(t.key))
	})

	if (!movieTrailer) return null
	return (
		<Dialog onOpenChange={closeModal} open={isOpen} modal defaultOpen={isOpen}>
			<DialogContent className="max-w-5xl w-[95%]  h-fit p-0  overflow-hidden">
				<div className="aspect-video">
					<ReactPlayer
						width="100%"
						height="100%"
						url={`https://www.youtube.com/watch?v=${movieTrailer}`}
						playing
					/>
				</div>
			</DialogContent>
		</Dialog>
	)
}
