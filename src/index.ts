const eslintConfig = {
	extends: ["@sapphire"],
	plugins: ["simple-import-sort"],
	rules: {
		"simple-import-sort/imports": "error",
		"simple-import-sort/exports": "error",
		"import/first": "error",
		"import/newline-after-import": "error",
		"import/no-duplicates": "error",
		"@typescript-eslint/consistent-type-definitions": "off",
		"@typescript-eslint/no-base-to-string": "off",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				fixStyle: "separate-type-imports",
				disallowTypeAnnotations: true
			}
		],
		"@typescript-eslint/member-ordering": [
			"error",
			{
				default: [
					"signature",
					"public-static-field",
					"protected-static-field",
					"private-static-field",
					"static-field",

					"public-instance-field",
					"protected-instance-field",
					"private-instance-field",
					"instance-field",

					"public-constructor",
					"protected-constructor",
					"private-constructor",
					"constructor",

					"public-instance-method",
					"protected-instance-method",
					"private-instance-method",
					"instance-method",

					"public-static-method",
					"protected-static-method",
					"private-static-method",
					"static-method"
				]
			}
		]
	}
};

export default eslintConfig;
