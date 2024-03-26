export function getImagePath(imagePath?: string, fullSize?: boolean) {
	return imagePath
		? `https://image.tmdb.org/t/p/${fullSize ? "orignal" : "w500"}/${imagePath}`
		: "/image_fallback.png"
}
