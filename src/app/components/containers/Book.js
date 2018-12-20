import React from 'react'

import './_style.scss'

export const Book = ({title="No Title Provided", author= "No Author", pages=0, freeBookmark}) => {
	return (
		<section className="book-wrapper">
			<h2>{title}</h2>
			<p>by: {author}</p>
			<p>Pages: {pages} pages</p>
			<p>Free Bookmark Today: {freeBookmark ? 'yes!': 'no!'}</p>
		</section>
	)
}