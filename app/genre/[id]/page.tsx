import { notFound } from 'next/navigation'

type Props = {
    params: {
        id: string
    }
    searchParams: {
        genre: string
    }
}
const SearchPage = ({ params: { id }, searchParams: { genre } }: Props) => {
    if (!id) notFound()
    id = decodeURI(id)
    genre = decodeURI(genre)
    return (
        <div>
            {id} {genre}
        </div>
    )
}

export default SearchPage
