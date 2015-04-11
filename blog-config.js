module.exports = {
	basePath: __dirname,
	src: {
		meta: 'meta.js',
		articles: 'articles/published'
	},
	templates: {
		index: 'templates/index.html',
		article: 'templates/article.html'
	},
	wrappers: {
		above: [
			'templates/header.html',
			'templates/nav.html'
		],
		below: [
			'templates/footer.html'
		]
	},
	dest: {
		index: 'public',
		articles: 'public/article',
		pages: 'public/pages',
		tags: 'public/tags',
		archives: 'public/archives'
	}
}
