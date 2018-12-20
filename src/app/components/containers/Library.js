import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';
import { Book } from './Book'
import { getGraphValues } from '../../actions/getAPI';
import { toggleTargetedDDOpen } from '../../actions/dropdownActions';
import './_style.scss'

const mapStateToProps = (state) => {
	return {
		graphValues: state.dashboard.data,
		isLoading: state.dashboard.loading,
		isOpen: state.dropdown.open
	}
};

const mapDispatchToProps = (dispatch) => ({
	getGraphValue: () => dispatch(getGraphValues()),
	toggleButton: () => dispatch(toggleTargetedDDOpen())
});

class Library extends React.Component {

	static defaultProps = {
		books: [
			{ "title": "Harry Potter", "author": "JK Rowling", "pages": 251 }
		]
	}

	loadGraphValues() {
		this.props.getGraphValue();
	}
	state = {
		freeBookmark: false,
		hiring: true,
	}


	componentDidMount() {
		this.loadGraphValues();
	}

	componentDidUpdate() {
		console.log("The component just updated")
		// console.log("state???!", this.state)
	}

	render() {
		const { books } = this.props
		return (
			<div>

				<div className="jumbotron jumbotron-fluid">
					<div className="container">
						<h1 className="display-4">ReactJS and Redux</h1>
						<p className="lead">This is a simple web application that calls and render the API using ReactJS and Redux.</p>
					</div>
				</div>

				{this.props.isLoading
					? "loading..."
					: <div className="product-wrapper">
						{this.props.graphValues.map(product => {
							return (
								<div key={product.id} className="product-container">
									<h3 className="product-title">Library Product of the Week!</h3>
									<h4 className="product-name">{product.name}</h4>
									<img className="product-image" alt={product.name} src={product.image} height={100} />
								</div>
							)
						})}
					</div>
				}
				<h1 className="library-title">The library is {this.props.isOpen ? 'open' : 'closed'}</h1>
				<button className="library-change" onClick={this.props.toggleButton}>Change</button>
				{books.map(
					(book, i) =>
						<Book 
							key={i}
							title={book.title}
							author={book.author}
							pages={book.pages}
							freeBookmark={this.state.freeBookmark} />
				)}
			</div>
		)
	}
}

Library.propTypes = {
	books: PropTypes.array
}

Book.propTypes = {
	title: PropTypes.string,
	author: PropTypes.string,
	pages: PropTypes.number,
	freeBookmark: PropTypes.bool
}

// export default Library

export default connect(
	mapStateToProps,
	mapDispatchToProps)(Library);