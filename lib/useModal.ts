"use client"
import type { Movie } from "@/typings"
import { create } from "zustand"

interface DialogProps {
	isOpen: boolean
	openModal: () => void
	closeModal: () => void
	movie: Movie
	setMovie(movie: Movie): void
}

export const useModal = create<DialogProps>(set => ({
	isOpen: false,
	openModal: () => set({ isOpen: true }),
	closeModal: () => set({ isOpen: false }),
	movie: {} as Movie,
	setMovie: movie => set({ movie }),
}))
