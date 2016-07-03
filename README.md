#sass
`sass input.scss output.scss`

##sass provides
 - Variables offer a method of storing a value so that we can reuse it later on.
`$primary-color: #A2A2A2;`
`$background-color: #C3C3C3;`
 - Nesting
 - Mixins
 -  Extend/inheritance

Inheritance allows you to keep your CSS DRY. For those unfamiliar with the principle of DRY, it stands for “Don’t Repeat Yourself” and aims to reduce repetition. Sass provides the ability to keep our CSS DRY through the directive @extend.

##sass with grunt
To compile your Sass files with Grunt, a Grunt plug-in called grunt-contrib-sass is available. Plug-ins that begin with “grunt-contrib” are plug-ins officially supported by the core Grunt team.
`npm insstall grunt grunt-contrib-sass --save-dev`

###sass configuration
`nested, expanded, compact, and compressed.`
the default value is nested
