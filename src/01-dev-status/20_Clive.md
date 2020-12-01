---
title: Hardocs Project Review
---
# Hardocs Project Review - Initiating Phase
<p style="text-align: center;">Clive Steward, San Diego, 30 Nov 2020</p>

## Introduction

Editing and reflection can be our apt tools, for bringing the fruits of imagination into best focus, but we can still enjoy a moment of a proper smile, for what the unusual natures of this first Hardocs project have brought us.

Due to the privileges of our sponsorship and team, we've had an opportunity to go after a challenge of significance; and bring back from this journey not only the insights of framings and researches, but a set of practical, operating models which demonstrate how these accomplishments and results are able to become more widely realized, into a future.

Then without some of the senses it may be rather natural to feel as we close this initial phase of Hardocs, we can examine some realities and some potentials of our work.

Experience would say a result as we've built is unusual for such a small team and time, and that it will have come from a high level of motivated dedication. It was clear from the beginning that we'd been given the opportunity to do something rather potentially contributive here:  to make frameworks which could streamline, make attractive, and thus enable concrete advances in the abilities for benefits that constructive imagination finds in **co-creation**, with its enabling **FAIR** and **OPEN** principles, to advance and succeed.

We could do this through improving ease and attractiveness of the necessary if somewhat daunting portions of **co-creative** effort, especially in producing its enabling summary information and metadata; then through constructing this local ability into a scalable and fundamentally secure internet cloud framework, which can amplify the requisite discoverability and likelihood to engage and to share.

These could be seen as keystones of **co-creative**, **FAIR** and **OPEN** ideas becoming more able to build into what we may sense as their potential.

I think we would feel we've added something fresh to this desirable intention, to degree it has possibility to aid improvements in todays world, through our six-months adventure.

### Looking forwards for a moment

Mature consideration realizes how much more there can be to do, in developing these already-working beginnings into the robust systems they can become.

That we've embodied **co-creation** as our own central motif, in a team benefiting well from our practices expert's views into the design laboratories Hardocs would deploy to, gives also a growing sense of how subtle the process can be, in engaging more widely with other contributors, as would come with natural moves forward.

We should be prepared for all this means, in its influences on pace which we ourselves could sustain only through donation in the spirit of our unusual moment, and in moving to a fully adjustive, open culture for following through in development, a suitable program anthropology.

In a way, and given what our tools may support as principles, it's a most interesting activity, is it not, towards making grounding concepts real.

Let's have a look at what the unusual progress of the Hardocs initiation has produced, and with a few comments as well on some facets possible, of a story for moving forwards.

It could be useful to mention that this exploration is using one method of view, while at its close are links to engage in another, so that each improves on their overall result, and what we have in Hardocs becomes clearer. The other's architectural statement has a picture, so you could start there if feeling attracted....

### Contents of our today's Delivery

There are actually two portions to Hardocs, connected by an overall architecture, using our application interfaces, some of which remain ready to be integrated at the closing point of this delivery.

The following sections will explain them, perhaps in a context-building way with the kinds of descriptions in the rest of this project site..

## Preparing project information, basis for sharing

The first and primary point a person would meet on using Hardocs would be the combined summary documentation and metadata editor, which has had several hands involved if primarily his own, as Jose Urra would detail.

We can mention here important aspects of this user experience's flexible abilities, which include:

 - a pleasant environment where a person will compose their project's summary documentation, with smooth abilities to copy and paste content from primary sources, including expected items like tex, diagrams and images.

    These visual elements are automatically treated to suit the needs of efficient internet sharing, so that they need not be given special attention to use them. For example, the actually giant snapshots so often convenient from contemporary cameras will end up nicely visible, but with their form become suitably web-sized, and embedded within our lingua franca of the project, an efficient HTML object as result.

- We also  have the ability, developed if not yet integrated, to import and export documents with other common formats, so that a person could use their preferred editor for originating files in Word or Markdown, to degree they'd like to.

- The metadata editor which accompanies side-by-side with the documents has a fine toolset to streamline this central work for discoverability and other uses, making it instead of tedious, actually natural and agreeable to do.  We think such attractive factors centrally important.

    An important portion of this improvement comes from providing Templates, click-to-enter selections which bring the features of complex real-life metadata schemas into easy and comfortable use.

   This makes them 'possible', as we might say...and the ability is included to make ones own schemas and templates also whenever desired, suitable to a given laboratory or individual's practices and locality.

## Providing the ways to share the information

Information sharing is the cornerstone of all **FAIR**, **OPEN**, and specifically **co-creation** activities, and so we've put considerable effort into creating an architecture and framework implementation which can make this fully practical -- and extendable to scale.

To do so, these capacities must provide a very confident level of security -- and then the ability to also discover and share easily, when a laboratory's project is ready to do so.

### Co-creation's dimensions: identity, then availability

The first consideration, trustworthy security, is needed is not only to avoid issues with the state of affairs on the internet, but to acknowledge and protect the value that may be inherent in a given project's content, whether that needs to be protected in early stages, or in a much longer term.

Because we can offer security, then we can provide also availability. The way this is accomplished is by focusing on identity.

Every person who would use the Hardocs system over the internet must identify themselves with one of the web's well-known and best trusted providers. We provide Google (email identity) at first, and the project can extend to others, including Open Source such as Github, through our deployment of the well-established and prominently supported OAuth2-Proxy system, which we've implemented in the Habitat cloud.

Once we have this solid knowledge of identity, we can provide both highly secure private access, and on its administrative choice, available public access, entirely separately. Our aspect of continuing to require identity also for public access is part of design for resisting hazards, as may be appreciated.

### The entirely private, laboratory-orientated tier

To provide the separated privileges of access, our architecture uses a layered arrangement of document databases, built at present on a well experienced and trusted basis which even IBM has taken on as a service offer, but which happens to be grounded in Open Source.

This is Apache CouchDB, which has a fundamental and proven reliability, notably in its replication aspect. As a document rather than SQL database, it offers contemporary high effectiveness and high flexibility, for the kinds of data Hardocs deals in.  In other words, an open future.

We organize our Hardocs secure layer into *locations*, which equate to laboratories or other primary entities where projects are housed, and then the arbitrary number of *projects* each such location may have.

The public layer, once again, receives replicated projects from the private databases, but only ever from those which have declared their intention to be published, to be shared.

Each laboratory can assign *agents* who can administer its projects, including their privacy, and the agents then can assign *members* who can access, read and write information within individual projects.

It's a straightforward arrangement which keeps operation of security in limited but flexible hands, as agents can share to make new agents, so that responsibility can be distributed, and control is never lost.

### The publicly available, discoverable tier

How does a project's information become discoverable, **co-creatable**, and otherwise available in public, in the wider goals of **OPEN** and **FAIR**?

This occurs as stated, only when the responsible agent declares a given project as *public*. At such a point, and only in that case, the project will be regularly replicated from private to the public document database, so its information can be found.

It is in the public layer where searches for discovery, and API access for availability are designed to be provided, and can be in future, possibly using means we are already familiar with, not least from the formative CombatCovid project, in graphically satisfying ways; or beyond this, as possibly more machine-orientated (e.g. GraphQL where appropriate) accesses, where deeper involvement with project text could be provided.

Search has its own well-known challenges to match its useful potentials. While certainly aware and considering, we've only prepared architecture imagining its needs in this initial Hardocs phase.

### Habitat: these descriptions, implemented in software

Our system which encompasses all these security and access capabilities is called Habitat, after a related approach which brought us success in CombatCovid.

At delivery the Habitat software includes full JavaScript APIs to engage the Electron system powering the Hardocs editor, what's needed for local database access, and all abilities of the secure Habitat cloud system, both on client and in the service we have operating live already, within a Linux droplet in the internet cloud.

This has been one way to outline the Hardocs story. For another approach to understanding, there's a section with interesting materials beginning with Design Goals  [here](/03-features-usecases/#design-premises), and a diagram-based description covering at this link covering the [Architectural Design](/03-features-usecases/03-Architecture.html#architectural-design)

## Where can we go from here?

In a truly **co-creative**, reflective , research and exploration, as this Hardocs phase has truly been, the advantage you can always notice -- and in fact can like well to be able to depend upon -- is in what you may learn along the way.

Some of what we know now can apply to futures awareness -- in particular to expect the many practical consideratiion in engaging a wider cooperation of persons for a project of such intention on wider contribution, and in such a distance of potential scope.

Another portion is in what you as cheerfully hope to find:  opportunities for fortune. These are changes in view and approach which result from the reflection on learning that **co-creation** might be noticed as being particularly likely to engage, in the sense of Donald Schön's formative work.

It's a truth that we've actually already had a number of those case, employed well in what we've put together to deliver at this point.

**Co-creation**, in the openness of even a small team, has produced some entirely welcome results.

There is more, as one should expect appearing at least in glimpse from the kinds of work we've done, but we'll limit to what's sensible in planning, here; some features that we visibly need to move forwards.

## Next practical steps

We could imagine that Hardocs, as accepted and welcomed as it or something growing from it might become, could grow to the large extent our architecture has taken care to feel we've prepared it to handle.

What we understand well in contemporary software practice is that the best way to move towards such achievements is to proceed rather in shorter, aware steps, focused on much closer goals.

These arrive each time from what's visible through being built, thus becoming well enough understood, practically at hand, and almost always suggestive of what would be good then to move into, often refining the outline of overall project goals.

This approach gives the fullest opportunities we can appreciate for effective **co-creation**, both within a team, and with extension into productive relationships with others, who we'd like to invite, and who become in any of the possible ways, contributors.

Our prototypes on delivery today are a considerable outcome for such a small project as we've had -- and it's likely that a very valuable next stage would be simply to complete them with their integrations, forming a first Hardocs system which can be  put fully in the hands of an appropriate set of initial users.

We would be continuing to work along this path in communication with our subject experts, who now begin to have the prototypes in hand. They will bring us the reactions and insights needed, so that the resulting Hardocs can be the effective pleasure as we intend, to use.

We'd do this at an understandable difference of pace from our highly enthused race of previous months, as is realistic to fully formed software, and to the lives of those who create it.

It was very good to do as we did, and will be very good to move on from that to what becomes sensible, inviting and sustainable going forwards.

At the same time, we're unlikely to lose the enjoyment or effectiveness we've learned, in this close experience we've had.

### What could be in a following scope of delivery

It's natural to see the portions of the Hardocs effort fully put together, no doubt as a fundamental. There's an amount to do, to flesh out what the prototypes make evident will be valuable to provide.

Integrating the nicely edited Hardocs data object with its available cloud Habitat is a prominent aspect of this, if there's also an amount of detail to work out for full and solid operation of the project and metadata editors, and some effort yet to do in completing the initial cloud facilities.

There are also aspects which are well planned, but need appreciable effort to actually provide. An example which shows this kind of scope, but is important to include, would be our architectural concept of References.

References are the way developments of a given, made-public project can be included as components of another project.

They are a strong concept, a basis for what Hardocs actually can do in its enabling, exactly, of **co-creation**.  That's because they form the thoughtfully simplified link between one project and its use in another, so that designs or realizations can be used and then re-used.

One can see that such links could be made by personal contact, outside communication of what a project has, but that in expansive use, Search to locate them would soon enough become a fundamental.

To close off this useful imagination for a practical present, it's probably well to consider that References would be implemented just at the manual level, for a Hardocs second phase.

This will give Search, which would likely wish to have several faces including a visual web application kindred to CombatCovid's, its own place as another phase to be entered, once the next has created its basis.

The same, one would feel, for more than a very basic form of access API, which Habitat itself already has, out of similar vision for what could be attractive to provide in futures.

It's the addition of considering such features as we've mentioned, which gives the true potential for Hardocs its size, and we should be thoughtful to respect this.

Going a distance beyond an initially complete trials implementation would doubtless involve a number of added persons, leading us back to appreciating why small goals and their steps are even more a method for good judgement to what's fruitful.

## Recompense

This has been a little bit of story-telling, to describe the Hardocs project in a useful and in hope, nicely constructive way.

We've been working with our hands on matters that could be seen as rather technical, but there is another tale which has actually been felt much more consistently, and as much more germane.

This is a quite human tale, a venture in fact to a sort of constructive anthropology, to bring that once-used word into further focus.

It is about what we may instinctively feel can be results of enabling better co-constructiveness, making more concrete our senses for **co-creation**, even how such approaches do and might make their way, if we are looking about us, in many fields.

Somewhere in this enabling story, one is pulled to recognize connections with others valued, such as the Reflective Practice, in concrete learning and its relationships to innovation, to what ever excites when it's found through aware activity in design, so subtly and yet so well developed by Donald Schön.

We should probably leave it at that, as something with which each person involved can form their own discoveries and relationships, if it feels likely there is something present of the engine behind our instincts, for the more **OPEN**, **FAIR**, cöoperative, to use an older word, developments.

Please enjoy what we've done, and one may hope, feel encouraged on a road of things new, things developing, that we can help and work with in our world, that good privilege to share.
