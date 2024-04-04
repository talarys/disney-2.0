'use client'
import type { Movie } from '@/typings'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel'

import MovieCardVertical from './MovieCardVertical'

type Props = {
    title?: string
    movies: Movie[]
}
const MoviesCarousel = ({ movies, title }: Props) => {
    return (
        <div className='z-30  relative'>
            <h2 className='text-xl font-bold px-10 py-2'>{title}</h2>
            <Carousel
                opts={{
                    align: 'start',
                    dragFree: true,
                }}>
                <CarouselContent className='-ml-1 py-5 '>
                    {movies?.map(movie => (
                        <CarouselItem
                            className='pl-4 basis-1/3 md:basis-1/6 xl:basis-1/12 cursor-pointer hover:scale-105 transform duration-200 ease-out z-30'
                            key={movie.id}>
                            <MovieCardVertical movie={movie} />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className='absolute left-10 scale-150 z-50' />
                <CarouselNext className='absolute right-10 scale-150 z-50' />
            </Carousel>
        </div>
    )
}

export default MoviesCarousel
