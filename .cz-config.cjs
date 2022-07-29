module.exports = {
	types: [
		{
			value: 'build',
			name: 'build:    Changes to the build process'
		},
		{
			value: 'chore',
			name: "chore:    Miscellaneous things that don't fit anywhere else"
		},
		{
			value: 'ci',
			name: 'ci:    Changes to the integration process'
		},
		{
			value: 'docs',
			name: 'docs:    Changes to the documentation process'
		},
		{
			value: 'feat',
			name: 'feat:     A new feature'
		},
		{
			value: 'fix',
			name: 'fix:      A bug fix'
		},
		{
			value: 'perf',
			name: 'perf:     A code change that improves performance'
		},
		{
			value: 'refactor',
			name: 'refactor: A code change that neither fixes a bug nor adds a feature'
		},
		{
			value: 'revert',
			name: 'revert:   Revert to a commit'
		},
		{
			value: 'style',
			name: 'style:    Changes that do not affect the meaning of the code\n            (white-space, formatting, missing semi-colons, etc)'
		},
		{
			value: 'test',
			name: 'test:     Adding missing tests'
		},
		{
			value: 'wip',
			name: 'wip:      Work in progress'
		}
	],

	/*
	'scopes': [
		{
			'name': 'accounts'
		},
		{
			'name': 'admin'
		},
		{
			'name': 'exampleScope'
		},
		{
			'name': 'changeMe'
		}
	],

	'scopeOverrides': {
	  fix: [
	    { 'name': 'merge' },
	    { 'name': 'style' },
	    { 'name': 'e2eTest' },
	    { 'name': 'unitTest' }
	  ]
	},
	*/

	// override the messages, defaults are as follows
	messages: {
		type: "Select the type of change that you're committing:",
		scope: '\nDenote the SCOPE of this change (optional):',
		customScope: 'Denote the SCOPE of this change:', // used if allowCustomScopes is true
		subject: 'Write a SHORT, IMPERATIVE tense description of the change:\n',
		body: 'Provide a LONGER description of the change (optional). Use "|" to break new line:\n',
		breaking: 'List any BREAKING CHANGES (optional):\n',
		footer: 'List any ISSUES CLOSED by this change (optional). E.g.: #31, #34:\n',
		confirmCommit: 'Are you sure you want to proceed with the commit above?'
	},

	allowCustomScopes: true,
	allowBreakingChanges: ['feat', 'fix'],
	subjectLimit: 100, // limit subject length

	breaklineChar: '|', // It is supported for fields body and footer.
	// footerPrefix: 'ISSUES CLOSED:',
	// askForBreakingChangeFirst: true, // default is false

	// 'skipQuestions': ['body'], // skip any questions you want

	allowTicketNumber: false,
	isTicketNumberRequired: false,
	ticketNumberPrefix: 'TICKET-',
	ticketNumberRegExp: '\\d{1,5}'
};
