<h1>Criteria for work acceptance by the tutor</h1>

<h2>Project</h2>
<b>«A1»</b> Refactoring of the project HTML-code is done using the BEM methodology.</h1>

<b>«A2»</b> Refactoring of the project CSS code is done using the SASS preprocessor.

<b>«A3»</b> In the root of the project, there is a sass folder, which contains all the preprocessor
style sheets.

<b>«A4»</b> In the sass folder, there is a main.scss file, the main file into which all SASS
fragments are imported (partials, \_name.scss files).

<b>«A5»</b> Layout color palette and font sets are presented as variables in the variables.scss file
in the sass/utils folder. CSS or SASS variables can be used (optionally).

<b>«A6»</b> For each component, a separate fragment style sheet is created in the sass/components
folder. For example, \_page-header.scss, \_logo.scss, etc.

<b>«A7»</b> In the index.html and portfolio.html files, a minified style sheet, main.min.css from
the css folder, is linked.

<h2>Markup</h2>
<b>«B1»</b> Proper naming of box classes according to the BEM methodology.

<b>«B2»</b> Proper naming of element classes according to the BEM methodology.

<b>«B3»</b> Proper naming of modifier classes according to BEM methodology.

<b>«B4»</b> Proper naming of mixin classes according to BEM methodology.

<b>«B5»</b> BEM class names are clear and descriptive, all in English.

<h2>Styling</h2> 
<b>«C1»</b> Selector nesting is used.

<b>«C2»</b> Maximum selector nesting is 2 levels.

<b>«C3»</b> The concatenation operator (&) is used to describe pseudo-classes and pseudo-elements.
