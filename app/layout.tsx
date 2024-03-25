import type { Metadata } from "next"
import { Inter as FontSans } from "next/font/google"
import Header from "@/components/Header"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"

import "./globals.css"

const fontSans = FontSans({
	subsets: ["latin"],
	variable: "--font-sans",
})

export const metadata: Metadata = {
	title: "Disney+ 2.0",
	description:
		"Stream brand new Originals, blockbusters and binge-worthy series",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="shortcut icon" href="/favicon/favicon.ico" />
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/favicon/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon/favicon-16x16.png"
				/>
			</head>
			<body
				className={cn("dark:bg-dbg font-sans antialiased", fontSans.variable)}
			>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<Header />
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
