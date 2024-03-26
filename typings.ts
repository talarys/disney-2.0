export type Movie = {
	adult: boolean
	backdrop_path: string
	genre_ids: number[]
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path?: string
	release_date: string
	title: string
	video: boolean
	vote_average: number
	vote_count: number
}

export type SearchResults = {
	page: number
	results: Movie[]
	total_pages: number
	total_results: number
}

export type Genre = {
	id: number
	name: string
}

export type Genres = {
	genres: Genre[]
}

export type MovieLogos = {
	logos: MovieLogo[]
}

export type MovieLogo = {
	iso_639_1: string
	file_path: string
	aspect_ratio: number
}
