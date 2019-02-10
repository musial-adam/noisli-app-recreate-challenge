module.exports = {
		"extends": [
			"airbnb",
			"prettier",
			"prettier/react"
		],
		"rules": {
			"react/jsx-filename-extension": 0,
			"prettier/prettier": [
				"error",
				{
					"trailingComma": "es5",
					"singleQuote": true,
					"printWidth": 80,
				}
			],
		},
		"parser": "babel-eslint",
		"plugins": [
			"prettier"
		]
};