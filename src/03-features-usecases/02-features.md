# Features 
A hybrid desktop and multi platform application developed with [electron](https://www.electronjs.org/), [vuejs](https://vuejs.org/),[couchdb](https://couchdb.apache.org/) and [pouchdb](https://pouchdb.com/). 

::: tip
All the features presented here have been explored and verified technically as part of the co-creation action, but they are still in the process of being implemented towards a usable product.
:::

For more detailed information on the development status visit [our development board](https://github.com/Hardocs/desktop-app/projects/2).

## Rich text editing using [CK-Editor5](https://ckeditor.com/ckeditor-5/)
**Status**: done

**Rationale**: Many users are not familiar with markdown syntax and setting up code editors. For non code documentation projects images are very important and documents need to be seen as they would read. Ckeditor allows to have powerful editing capabilities beyond markdown editing, and create html documents that support from code blocks to embedded images and math syntax. With this capability users don't have to switch from markdown editing to previewing anymore. This is particularly useful for cases like hardware documentation.

## Create and save light html files
**Status**: done

**Rationale**: Html 5 is a very stable and supported format, we tried first to support markdown but this format presents various issues including lack of standardization and lack of styles specificity. For this particular reason we have decided to adopt html as our lingua franca. It can be opened in browsers and exported to various formats using pandoc. 

**About size and portability**: Documentations should be transfered fast over the wire, this is why we have been working on image size reduction and optimization.

**About image management**: Hardocs documents contain embedded images, this frees users from having to type image routes and paths in the html document.


## Support to import metadata standards specified in JSON schemas
**Status**: in progress

**Rationale**: Metadata specified in JSON schemas can be imported to document projects using a particular standard. Scientists in particular use diverse types of standards to archive and publish metadata and documents related to a particular publication or research project. Our focus is to enable that and let communities of practice define and decide which standards to use.


## Metadata editor
**Status**: in progress

**Rationale**: An easy to use metadata editor that enable to easily generate fields and validate against standards the correctness and completeness of the metadata. Editing directly json or xml is not a usable solution to document projects. 

**Portability and locality of metadata**: Metadata files are created also on hardocs directory project, allowing the user to also directly use this metadata file in different contexts of use.


## Local data base integration
**Status** to do

**Rationale**:


## Cloud database integration
**Status** todo

**Rationale**:

## Integration with pandoc
**Status** todo