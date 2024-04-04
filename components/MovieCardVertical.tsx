'use client'
import { getImagePath } from '@/lib/getImagePath'
import { useModal } from '@/lib/useModal'
import type { Movie } from '@/typings'
import Image from 'next/image'

const MovieCardVertical = ({ movie }: { movie: Movie }) => {
    const { setMovie, openModal } = useModal()
    return (
        <div
            onClick={() => {
                setMovie(movie)
                openModal()
            }}>
            <Image
                alt={movie.title}
                width={1080}
                height={1920}
                src={getImagePath(movie.poster_path || movie.backdrop_path)}
                className='object-cover object-center shadow-md shadow-gray-900 drop-shadow-xl rounded-sm'
            />
        </div>
    )
}

export default MovieCardVertical
