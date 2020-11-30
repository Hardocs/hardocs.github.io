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

## Habitat client api
**Status**: operational, in natural progress as Hardocs abilities increase
**Rationale**: The Habitat Client provides a complete package of application access to refined Electron/workstation files operations, visual and programmatic; access to a local database for Hardocs data; and then both administrative and operational interaction with the Hardocs Habitat cloud services.

## Habitat internet cloud service
**Status**: operational on the internet, in progress, future abilities planned
**Rationale**: The Hardocs Habitat is a self-contained cloud service which manages and distributes Hardocs project data. With its diligently secure, strong identity-based protections, it keeps project information fundamentally private, only to persons specifically permitted by administration at the projects location. In futures-provided architecture, its public layer will become active, enabling projects to be chosen to be published if so desired, advancing with increasing features for **FAIR**/**OPEN** discovery, thus wider use.

## Habitat Application Framework
**Status**: operational, in progress
**Rationale**: The application framework has been and continues as the backbone of discovery in our researches and forwards implementations for Hardocs. As well as visually demonstrating developments in the abilities packages we write, it gives examples of programming techniques which enable the flexibility and attractiveness of Hardocs. Mutating as it does, there are feature versions for many steps along the way. Its currently most useful variant allows demonstrating both pandoc document conversions, and the Hardocs Cloud abilities in the internet, which are central to Hardocs and its potentials.

## Local data base integration
**Status** facility operational, integration to do

**Rationale**: Hardocs uses Apache CloudDB as its powerful, document-orientated database, which enables many important efficiencies and features. We have its sibling PouchDB on the Hardocs client, which allows local storage for complete Hardocs data objects. Habitat Client provides this ability, demonstratable in the Application Framework, which the editor application will integrate.


## Cloud database integration
**Status** initial facility operational, integration todo, advancements to follow

**Rationale**: Complete informmation for a Hardocs project, its summary documentation, images, and all-important metadata are contained in the Hardocs object. The objects are stored in a client local database, and replicated with the Hardocs Cloud. With feature advancements anticipated, this will allow co-working for multiple persons or workstations, collaborating on the same project; and future abilities for publication of projects for discovery in wider use.

## Integration with pandoc
**Status** facility operational, integration todo

**Rationale**: Hardocs operates to a design with a 'lingua franca' for all its documents, which is a fully encapsulated form of HTML, including all material including diagrams and images. This has considerable and necessary advantages, but we also want to provide best ease for persons who prefer to initially compose in formats such as Markdown or Word, etc.. Pandoc give us powerful conversion to accomplish this, and we have within Habitat Client a working api ready to integrate.
