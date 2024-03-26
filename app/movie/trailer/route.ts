export async function GET(req: Request) {
	const { searchParams } = new URL(req.url)
	const id = searchParams.get("id")

	const url = new URL(`https://api.themoviedb.org/3/movie/${id}/videos`)
	url.searchParams.set("include_video", "false")
	url.searchParams.set("sort_by", "popularity.desc")
	url.searchParams.set("language", "en-US")
	url.searchParams.set("page", "1")

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
	const data = await response.json()

	const trailers = data.results.filter(
		(video: { site: string; type: string }) =>
			video.site === "YouTube" && video.type === "Trailer",
	)
	const key = trailers[0].key || "dQw4w9WgXcQ"
	return Response.json({ key })
}
