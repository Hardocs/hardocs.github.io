---
title: Hardocs Project Review
---
# Hardocs Project Review - Initiating Phase
<p style="text-align: center;">Draft, Clive Steward, San Diego, 29 Nov 2020</p>

## Introduction

There's a certain breathlessness it must be natural to feel, as we approach a delivery date for this initial phase of Hardocs. It's no doubt the result of a continuous intensity and pace for the period, which have enabled us to deliver, based in discovery and creation of architecture towards a fully implementable system, a nice set of fully operable demonstrations, for each of the developments these researches we were contracted to have produced.

Experience would say such a result is unusual, and that it must have come from a very high level of motivated dedication. We've had a highly unusual team, with the sense that we'd been given the sponsorship to do something very potentially contributive here:  to streamline and make framework which could enable real advances in the visible opportunities for **co-creation's** benefits to develop and extend.

We could do this through improving the ease of the necessary if somewhat daunting portions of effort, especially in creating metadata, and through constructing this local ability into a scalable and fundamentally secure internet cloud framework which can amplify discoverability and shareability, the keystones of **FAIR** and **OPEN** ideas becoming able to build new stages in concrete reality.

I think we would feel we've added something fresh to this rather desirable intention, a way one may feel to improve in todays world, through our six-months adventure.

### Looking forwards for a moment

Mature consideration realizes how much more there can be to do, in developing these already-working beginnings into the systems they can become.

That we've embodied **co-creation** as our central motif, in a team benefiting foundationally from expert insight into the design laboratories Hardocs would deploy in, gives also an early insight, a growing sense of how subtle the process can be, in engaging more widely with others, in natural moves forward.

We should be prepared for all this means, not least in its influences on pace, and on a fully adjustive culture for development, a program anthropology. In a way, and given what our tools may support, it's the most interesting activity, is it not, of making the grounding concepts real.

Let's have a look at what the unusual activity of the Hardoc initiation has produced, and with a few comments as well, on some facets possible, of a story for moving forwards.

### Contents of our today's Delivery

There are actually two portions to Hardocs, connected by an overall architecture, and our application interfaces, some of which remain ready to be integrated at the closing point of this delivery.

The following sections will explain them.

## Preparing project information, basis for sharing

The first and primary point a person would meet on using Hardocs would be the combined summary documentation and metadata editor, which has had several hands involved if primarly his own, as Jose Urra will detail.

We can mention here important aspects of its flexible abilities, which include:

 - a quite pleasant environment where a person will compose their project's summary documentation, with smooth abilities to copy and paste content from primary sources, including expected items like tex, diagrams and images.

    These visual elements are automatically treated to suit the needs of highly efficient internet sharing, so that they need not be given special attention. For example, the actually giant snapshots so often convenient from contemporary cameras will end up very visible, but with their form become suitably web-sized, embedded within our lingua franca encapsulated HTML result.

- We also  have the ability, developed if not yet integrated, to import and export documents with other formats, so that a person could use their preferred editor with files in Word or Markdown, to degree they'd like to.

- The metadata editor which accompanies side-by-side with the documents has a fine toolset to streamline this work, making it instead of tedious, actually natural and agreeable,

    An importaat part of this improvement comes from providing Templates, click-to-enter selections which bring the features of complex real-life metadata schemas into easy and comfortable use.

   This makes them 'possible', as we might say...and the ability is included to make ones own schemas and templates, suited to a laboratory or individual's practices and locality.

## Providing the ways to share the information
Information sharing is the cornerstone of all **FAIR**, **OPEN**, and specifically **co-creation** activities, and so we've put considerable effort into creating an architecture and framework implementation which can make this fully practical -- and extensive.

To do so, these capacities must provide a very confident level of security -- and then the ability to also share easily, when a laboratory's project is ready to do so.

### Co-creation's dimensions: identity, then availability

The first consideration, trustworthy security, is needed is not only to avoid issues with the state of affairs on the internet, but to acknowledge and protect the value that may be inherent in a given project's content, whether that needs to be protected in early stages, or in a much longer term.

Because we can offer security, then we can provide also availability. The way this is accomplished is by focusing on identity.

Every person who would use the Hardocs system over the internet must identify themselves with one of the web's well-known and fully trusted providers. We provide Google (mail identity) at first, and the project can extend to others, including Open Source such as Github, through our deployment of the well-established and widely supported Oauth2-Proxy system, which we've implemented in the Habitat cloud.

Once we have this solid knowledge of identity, we can provide both highly secure private access, and available public access, entirely separately. Our aspect of continuing to require identity also for public access is part of design for resisting hazards, as may be appreciated.

### The entirely private, laboratory-orientated tier

To provide the separated privileges of access, our architecture uses a layered arrangement of document databases, built at present on a very well tested and trusted basis which even IBM has taken on as a service offer, but which happens to be grounded in Open Source.

This is Apache CouchDB, which has a fundamental and proven reliability, notiably in its replication, and as a document rather than SQL database, offers contemporary high efficiency, along with flexibility for the kinds of data Hardocs deals in.  In other words, an open future.

We organize the highly secure layer into *locations*, which equate to laboratories or other primary entities where projects are housed, and then the arbitrary number of *projects* each such location may have.

The public layer, once again, receive replicated projects from the private databases, but only ever from those which have declared their intention to become shared.

Each laboratory can assign *agents* who can administer its projects, including their privacy, and the agents then can assign *members* who can access, read and write information within individual projects.

It's a straightforward arrangement which keeps operation of security in limited but flexible hands, as agents can share to make new agents, so that responsibility can be distributed, and control is never lost.

### The publicly available, discoverable tier

How does a project's information become discoverable, **co-creatable**, and otherwise available in public, in the wider goals of **OPEN** and **FAIR**?

This occurs only when the responsible agent declares a given project as *public*. At such a point, and only in that case, the project will be regularly replicated from private to the public document database, so its information can be found.

It is in the public layer where searches for discovery, and apis for availability are designed to be provided, and can be in future, using means we are already familiar with, not least from the formative CombatCovid project, in graphically satisfying ways, or beyond this, as possibly more machine-orientated (e.g. GraphQL where appropriate) accesses.

It should be noted that no searches or other external apis are provided in this initial Hardocs phase; indeed, though the capabilities have a nice user experience demonstration, the integration of Hardocs editor data and the cloud was one step further than we could fit into this exploratory period -- and indeed, some aspects of the exploration may have indicated an interesting way we'd possibly improve on what we have, in a further phase.

### Habitat: these descriptions, implemented in software

Our system which encompasses all these security and access capabilities is called Habitat HD, after a related approach which brought us success in CombatCovid.

At delivery the Habitat software includes full JavaScript APIs to engage the Electron system powering the Hardocs editor, what's needed for local database access, and all abilities of the secure Habitat cloud system, both on client and in the service we have operating live already, within a Linux droplet in the internet cloud.

Here is a modeling diagram, to indicate where the various portions of Habitat live.

// diagram

## Where can we go from here?

In a truly **co-creative**, reflective design research and exploration, as this Hardocs phase has truly bee, the advantage you can always notice -- and in fact can like well to be able tp depend upon -- is in what you may learn along the way.

Some of what we know now can apply to futures awareness, which allows the properly imaginative approach which plans for the realities of larger scope and scale -- in particular as mentioned, the generative that in **co-creation** we look for, as well as the many practical aspects of engaging a wider cooperation of persons.

Another portion is what you actually hope to find:  opportunities for fortune. These are changes in view and approach which result from the reflection on learning, in the sense of Donald Schön's formative work, and we actually have already had a number of those, already employed in what we've made to deliver at this point.

**Co-creation**, in the openness of even a small team, has produced some entirely welcome results.

There is more, however, as one should expect as realizations have built, but we'll limit to the sensible in planning, here; some features that we visibly need to move forwards.

## Next practical steps

We could imagine that Hardocs, as accepted and welcomed as it might be, could grow to the large extent our architecture has taken care to feel we've prepared it to handle.

What we understand in contemporary software practice is that the best way to move towards such achievements is to proceed in steps focused on much closer goals.

These arrive each time from what's become visible through being built, thus well enough understood, practically at hand, and almost always suggestive of what would be best then to move into, within the similarly refining outline of overall project goals.

This approach gives the fullest opportunities we appreciate for effective **co-creation**, both within a team, and with extension into relationships with others, who we'd like to invite, and who become contributors.

Our prototypes on delivery today are a considerable outcome of such a small project as we've had -- and it's likely that a very valuable further stage would be simply to complete them with their integrations, forming a first Hardocs system which can be  put fully in the hands of an adequate set of initial users.

We would be continuing to work along this path with our subject experts, who now begin to have the prototypes in hand. They will give us the reactions and insights needed, so that the resulting Hardocs can be the effective pleasure as we intend, to use.

We'd do this at an understandable difference of pace from our highly enthused race of previous months, as is realistic to fully formed software, and to the lives of those who create it. It was very good to do as we did, and will be very good to move on to what becomes sensible, going forwards.

### What could be in a following scope of delivery

It's natural to see the portions of the Hardocs effort fully put together, no doubt as a fundamental. There's an amount to do, to flesh out what the prototypes make evident will be valuable to provide.

Integrating the nicely edited Hardocs data object with its available cloud Habitat is a visible aspect of this, if there's also an amount of detail to work out for full and solid operation of the project and metadata editors, and some yet to do in completing the cloud facilities.

There are also aspects which are well planned, but need appreciable effort to actually provide. An example which shows this kind of scope, but is important to include, would be our architectural concept of References.

References are the way developments of a given, made-public project can be included as components of another project.

They are a strong concept, a basis for what Hardocs actually can do in enabling, exactly, **co-creation**.  That's because they form the thoughtfully simplified link between one project and its use in another, so that designs and realizations can be used and then re-used.

One can see that such links could be made by personal awareness, outside communication of what a project has, but that in expansive use, Search to locate them soon becomes a fundamental.

To close off this useful imagination for a practical present, it's probably well to consider that References would be implemented just at the manual level, for a Hardocs second phase.

This will give Search, which would likely wish to have several faces including a visual web application one kindred to CombatCovid's, its own place as another phase to be entered, once the next has created its basis.

The same, one would feel, for more than a very basic form of API, which Habitat itself already has, out of similar vision for what could be attractive to provide in futures.

### On fruitful imagination

Creative insight can be very useful, and it's a natural product of the kind of actually far-reaching vision that's been placed into the Hardocs frameworks. It can also raise challenging questions, often best held until a later time.

That's the wisdom for one possibility which will be further considered, and brought forward at an appropriate point if discussion with others proves it would be valuable enough in a balance to consider. The reason to mention such is just to assure the sponsors that our net is adequately wide -- and that good judgment is always a measure for what one may find in it.

## Recompense

This has been a little bit of story-telling, to describe the Hardocs project in a useful and hopefully constructive way.

We've been working with our hands on matters that could be seen as rather technical, but there is another tale which has actually been felt much more consistently, and as much more germane.

This is a quite human tale, a venture in fact to a sort of constructive anthropology. It is about what we may instinctively feel can be results of enabling better co-constructiveness, making more concrete our senses for **co-creation**.

Somewhere in this enabling story, one is pulled to recognize connections with others valued, such as the Reflective Practice, in learning and its relationships to innovation, to fruitful design, so subtly and yet so well developed by Donald Schön.

We should probably leave it at that, as something with which each person involved can form their own discoveries and relationships, if it feels likely there is something present of the engine behind our instincts, for the more **OPEN**, **FAIR** developments.

Please enjoy what we've done, and one may hope, feel encouraged on a road of things new, things developing, that we can help and work with in our world, that good privilege to share.
