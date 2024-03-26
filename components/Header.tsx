import Image from "next/image"
import Link from "next/link"
import ThemeToggler from "./ThemeToggler"
import SearchInput from "./SearchInput"

import disneyLogo from "/public/logo/disney.svg"
import GenreDropdown from "./GenreDropdown"

const Header = () => {
	return (
		<header className="flex justify-between fixed w-full top-0 items-center p-5 bg-gradient-to-t from-gray-900/0 via-gray-900/25 to-gray-900 z-50">
			<Link href={"/"} className="mr-10">
				<Image src={disneyLogo} alt="logo" className="w-32 cursor-pointer" />
			</Link>
			<div className="flex space-x-2">
				<GenreDropdown />
				<SearchInput />
				<ThemeToggler />
			</div>
		</header>
	)
}

export default Header
