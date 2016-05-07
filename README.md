# riotjs-experiments

## Creation of tags
Create tags/components in files ending with the .tag extension.

### Tag contents
* layout
 * html template with bindings
* style
 * can be scoped (using attribute selection)
* script
 * only needs to be wrapped in script tags if you are using transpiler
 * highlighting seems to work better in atom if you wrap it anyway

### Compiling tags to js

Tag files need to be either
* compiled at build (cli)
* in the browser

http://riotjs.com/guide/compiler/

#### Compiling in the browser
The easiest way to get started playing with RiotJS.

```html
<script src="vendors/riot/riot+compiler.js"></script>
```

#### Compiling on the CLI
The better way to work.

##### A tag file
```shell
riot tagfile.tag tagfile.js
```

##### A folder of tag files
```shell
riot tags-folder/ tags-bundle.js
```
