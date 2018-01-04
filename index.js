const path = require('path');

const noWarningPath = path.join(
	require.resolve('eslint'),
	'..',
	'rules',
	'no-warning-comments.js'
);

module.exports = {
	rules: {
		'no-warning-comments': require(noWarningPath),
	},
};
