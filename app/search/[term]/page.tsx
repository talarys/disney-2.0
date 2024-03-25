import { notFound } from 'next/navigation'

type Props = {
    params: {
        term: string
    }
}
const SearchPage = ({ params: { term } }: Props) => {
    if (!term) notFound()
    term = decodeURI(term)
    return <div>{term}</div>
}

export default SearchPage
