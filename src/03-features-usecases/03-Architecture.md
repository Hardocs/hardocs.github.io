# Architecture design

We've mentioned some of the driving goals for the Hardocs Architecture in the Design Premises, so this should be a place to describe some aspects of how they are implemented.

A diagram can be a good way to visualize, and understand location for points of interest we'll talk about. Let's start with this outline of the architecture's data flows.
<img src="./clive-images/hardocs-data-flows.png" style="margin: 20px auto;">

## The Hardocs Data Object

We're interested in a unified package of data for each design project Hardocs engages with, and a formal data object gives us a nice way to obtain this.

You can see the content types our design carries, which are attuned to **FAIR** and **OPEN** sharing, with best support at this level for enabling effective **co-creative** discovery and sharing.

### Visible project documentation

We support summary documentation, which can be composed via the Hardocs editor as a sensible introduction to any of the myriad forms and resources a project may likely have in their full repository or files.

This reduction is entirely necessary as our calculations of data transfers show; while it is also a formidable way to get a project's presentation into a view where others can find and discover about it.

We anticipate a variety of methods possible for discovery, not to exclude a rapid-fire and highly visual application in some future, which would present much as the CombatCovid Finder-Viewer web app does. Interesting forms of text search are also possible to develop, on a menu.

### Visible object format and content

Besides familiar formatted text, mages and drawings much as in this Hardocs website can be included, and will be automatically sized and handled as it's brought into the object. This will save a lot of effort from being necessary on typical camera images, for example, and gives the protection we require on absolute data size.

Text and images are brought together in our 'lingua franca', which encapsulates both in a single-file form of HTML. A file for each document is always written  into files on the workstation, at the side of their internal database-capable object we operate Hardocs with, providing an automatic backup against any form of unexpected loss.

### Hardocs Metadata content

The third form of the Hardocs Object information is the JSON metadata. It is essential in describing the project according to standards, which especially enable forms of machine-enhanced discovery.

We provide some very thoughtful abilities in the Hardocs editor for this metadata, using easy-entry graphics forms where items and composites are chosen readily from Templates, as well as composable at any time individually.

One doesn't deal then with syntax and computer coding; rather with simple items where names, types, and information is simply formed.

Hardocs handles all the internal matters, and incorporates the resulting metadata with its Data Object, giving that unified element we can manipulate, share, display, and discover.

## Where does the data go? Databases, and the Cloud

Referring again to our diagram, you can see that once Hardocs Data Objects are formed, they begin to travel. As mentioned in other discussions, there's flexibility in this, due to the architecture's design of services and interfaces, but we'll discuss the powerful basis we're working with at present, which is based on the abilities of the *document* (as distinguished from SQL) database, Apache CoudhDb


