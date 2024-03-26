import type { SearchResults } from "@/typings"

async function fetchFromTMDB(url: URL) {
	url.searchParams.set("include_video", "false")
	url.searchParams.set("sort_by", "popularity.desc")
	url.searchParams.set("language", "en-US")
	url.searchParams.set("page", "1")
	url.searchParams.set("append_to_response", "videos")

	const options: RequestInit = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	}

	const response = await fetch(url.toString(), options)
	const data = (await response.json()) as SearchResults
	return data
}

async function useFetchFromTMDB(url: URL) {
	const data = await fetchFromTMDB(url)
	return data.results
}

export async function getUpcomingMovies() {
	const url = new URL("https://api.themoviedb.org/3/movie/upcoming")
	return await useFetchFromTMDB(url)
}
export async function getTopRatedMovies() {
	const url = new URL("https://api.themoviedb.org/3/movie/top_rated")
	return await useFetchFromTMDB(url)
}
export async function getPopularMovies() {
	const url = new URL("https://api.themoviedb.org/3/movie/popular")
	return await useFetchFromTMDB(url)
}

export async function getDiscoverMovies(id?: string, keywords?: string) {
	const url = new URL("https://api.themoviedb.org/3/discover/movie")
	keywords && url.searchParams.set("with_keywords", keywords)
	id && url.searchParams.set("with_genres", id)
	return await useFetchFromTMDB(url)
}

export async function getSearchedMovies(term: string) {
	const url = new URL("https://api.themoviedb.org/3/search/movie")
	url.searchParams.set("query", term)
	return await useFetchFromTMDB(url)
}

export async function getMovieRecommendations(id: number | string) {
	const url = new URL(
		`https://api.themoviedb.org/3/movie/${id}/recommendations`,
	)
	return await useFetchFromTMDB(url)
}
