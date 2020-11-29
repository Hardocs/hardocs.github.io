---
title: Hardocs Project Review - Clive Steward
---
# Hardocs Project Review - Initiating Phase
<p style="text-align: center;">Draft, Clive Steward, San Diego, 28 Nov 2020</p>

## Introduction

This should be an adequately formal report, but I feel it worthwhile to mention something up front, about how unusual an experience our time with the project has been.

Our intentions have been very much to return value to our sponsors by arriving at something fresh -- and concrete -- in the progress of OPEN, FAIR, and especially, co-creative principles.

We've worked to make here, as a basis, a tool that can simplify and make actually attractive, the creation of summary documentation side-by-side with its all-important metadata, both of which drive the ability to discover, and thus to connect, to design and construct with the participations of others.

In concert, we've created a cloud-based framework which can both entirely protect project privacy, and then at an agreeable point of ownership choice, share results globally. As a first principle to this control of essential security, there is a solid platform which makes use of the most dependable identity determination available.

## Anticipation, for moving forward

It could be appreciated that even at the prototype level we've arrived at, and especially with the solid architectural foundation supporting it, this is something more than could normally be expected from a short period with a small, and truly international team.

There has, then, been a combination of intensity, cooperative work in every regard, daily enthusiasm, and frankly, many hours of donated effort above what a contract may provide, which has brought our shared experience in this result.

The problem promised a great enough if quiet potential, and each person involved responded to what it looked like we could do, and as we discovered by research and trials, how far we could go, bring this forwards.

Looking ahead, and with the benefit perhaps of some years of innovative and elaborative projects through consulting, it's well to appreciate what can be brought forward from here -- and that it will necessarily have a different intensity as scope, new persons involved, and the real magnitude of effort in filling out full capabilities grow the result into more and more practical, actualized application.

In particular, we'll need to take the time, the more relaxed approach, and the true patience for the practices which will allow the actual potentials of *co-creation* on this project itself to be effective, to shine through. And that would be entirely appropriate, one would feel, to the intentions we'd like to fulfill.

## A moment's pause for theory

If one were to take one model for what this might mean, they might well refer to the Reflective Practices of development, due to the late Donald Schön, a truly generous intellectual and person, who worked very much into a practical world, and once into the popular world, giving a Reith Lecture for the BBC, from his homes in academia.

 He was in fact instrumental in approaches we may have heard of, such as the Learning Organization, given over to his graduate students; and his depth of acutely penetrative thinking, expressed often through the means  of interrogated examples and analogies, may offer very much to a person who finds the chance to consider them.

## Contents of our today's Delivery

There are really two portions, connected by architecture and application interfaces, while not yet fully integrated in this delivery.

### Our great benefit of subject-knowledgable persons

Contribution in the project was not at all only from persons producing designs and software. The intense sessions we had with Santosh, sometimes with others, very much contributed to our picture of what could be answered, what situations could benefit from our frameworks. We completely appreciated any of the times we could spend in discussion this way.

Sometimes the 'take' on these sessions would be something we could implement; sometimes it gave a clear vision of what might be asked, but where another answer would need to be provided, from abilities and constraints where we could provide a better fit.

Each pathway was ever quite valuable, and that is a truth of co-creation: new knowledge and reflection, checking again by returning to the discussion, the communication.  This worked consistently, and served all of us very well, over the length of the project period.

From the results of this ongoing process, we've developed and refined the designs which follow.

### Preparing information for sharing

The first and primary point a person would meet on using Hardocs would be the combined documentation summaries and metadata editor, which has had several hands involved in it if primarly his, as Jose Urra will detail.

We could mention here important facts of its flexible abilities, which include:

 - a quite pleasant environment to write summary documentation in, able to copy and paste content from primary sources, including besides text such items as diagrams and images. These visual elements are automatically treated to suit the needs of highly efficient internet sharing, so that they need not to have special attention. For example, the actually giant snapshots so often convenient from contemporary cameras will end up very visible, but with their form also suitably web-sized, in our lingua franca encapsulated html result.
- The capability has also been developed to import and then edit down material from other formats that a project's full documentation may have been preferred originally to be written in, such as Markdown or Microsoft Word
- The metadata creation editor itself has a fine toolset to streamline this process, making it instead of tedious actually natural and agreeable, by providing click-to-enter selections which bring the features of complex real-life metadata schemas into easy and comfortable use. Thus making them 'possible', as we might say...and the ability is included to make ones own schemas and templates, suited to a laboratories practices and locality.

### Providing the ways to share the information

Information sharing is the cornerstone of all FAIR, OPEN, and specifically co-creation activities, and so we've put considerable effort into creating an architecture and initial framework implementation which can make this fully practical.

To do so, it must provide a very confident level of security -- and then the ability to share easily, when a laboratory's project is ready to do so.

## Co-creation's dimensions: identity, then availability

The first consideration needs to be security. This is not only to avoid issues with the state of affairs on the internet, but especially to acknowledge and protect the value that may be inherent in a given project's content, whether that needs to be protected early or in a much longer term.

Because we can offer security, then we can provide also availability. The way this is accomplished is by focusing on identity.

Every person who would use the Hardocs system over the internet must identify with one of the web's well-known and fully trusted providers. We provide Google (mail identity) at first, and the project can extend to others, such as Open Source Github, through our deployment of the well-established and supported Oauth2-Proxy system.

Once we have this solid knowledge of identity, we can provide both highly secure access and public access separately. Requiring identity for public access is part of the design for resisting hazards, as may be appreciated.

### The entirely private, laboratory-orientated tier

To provide the separated privileges of access, our architecture uses a layered arrangement of document databases, built at present on a very well tested and trusted basis which even IBM has taken on as a service offer, but which happens to be grounded in Open Source.  This is Apache CouchDB, which has a fundamentally and proven reliability in replication, and as a document rather than SQL database, offers contemporary high efficiency and flexibility for the kinds of data Hardocs deals in.  In other words, an open future.

We organize the highly secure layer into *locations*, which equate to laboratories or other primary entities where projects are housed, and then the arbitrary number of *projects* each such location may have.

Each laboratory can assign *agents* who can administer their projects, and the agents then can assign *members* who can access, read and write information for individual projects.

It's a straightforward arrangement which keeps control of security in limited but flexible hands, as agents can share to make new agents, so that control is never lost.

### The public tier

How does a project's information become discoverable, and otherwise available in public, in the wider goals of OPEN and FAIR?

This occurs only when the controlling agent declares a given project as *public*. At that point, the project will be regularly replicated from private to the public document database.

It is in the public layer where searches for discovery, and apis for availability are designed to be provided, and can be in future, using means we are alread77 familiar with, not least from the formative CombatCovid project, in graphically satisfying ways, or beyond this, as possibly more machine-orientated (e.g. GraphQL where appropriate) ways.

It should be noted that no searches or other external apis are provided in this initial Hardocs phase; indeed, though capabilities have a nice user experience and actual speed demonstration, the integration of Hardocs editor data and the cloud was one step further than we could fit into this exploratory period -- and indeed, the exploration may have indicated an interesting way we'd improve on what we have, in a further phase.

### Habitat: these descriptions, implemented in software

Our system which encompasses all these security and access capabilities is called Habitat HD, after a related approach brought us success in CombatCovid, and at delivery the software includes full JavaScript APIs to engage the Electron system powering the Hardocs editor, and all abilities of the secure Habitat data system, whether on client or in the server we have operating live already, on a Linux droplet in the internet cloud.

Here is a modeling diagram, to indicate where the various portions of Habitat live.

// diagram

## Where can we go from here?

In a truly co-creative, reflective design research and exploration, as this Hardocs phase, the advantage you can always notice -- and in fact can like well to be able tp depend upon -- is in what you may learn along the way.

Some of what we know now can apply to proper futures awareness, which allows the properly imaginative approach which plans for the realities of larger scope and scale -- in particular as mentioned, the generative that in co-creation we look for, as well as the many practical aspects of engaging a wider cooperation of persons.

Another part is what you actually hope to find:  opportunities for fortune. These are changes in view and approach which result from the reflection on learning, and we actually have already had many of these, engaged in what we've made to deliver at this point.

Co-creation, in the openness of even a small team, has produced some entirely welcome results.

There is more, however, as one should expect as realizations build, and so at least one of those that could be significant is outlined further.

### Next practical steps - for a path that's straightforward

Actually, we can imagine a number of stages of these, given that Hardocs is accepted and welcomed as it might be, would grow to the large extent our architecture has taken care to feel we've prepared for.

It's recommendable, however, that we stick to our effective, open and also quite aware methods, and gain every advantage through growing the project in appropriate stages. By appropriately, thus **gradually** extending the OPEN aspects of the project, we'll do that effectively, and a way most friendly to all who might be interested to observe or contribute.

The project sources at delivery are fully visible as Open Source on Github, and thus the progress we should make, on top of that which has been made, should be intelligently visible.

Our prototypes are a considerable outcome of such a small project -- and deserve to be brought into a much fuller completion, making an initial Hardocs system which can be fully put in the hands of a set of initial users.

While a next phase would construct this level of completion, we would be using all along contributions from our subject experts, who now begin to have the prototypes in hand. They will give us insight certainly, as we firm up decisions and implementations, so that the resulting Hardocs will be fully useful, and the pleasure we intend, to use.

For all the practical reasons, this second phase will need to observe a much more realistic pace than our highly enthused race of previous months. Good, fully formed software takes care; and persons who think out and construct it need to recover full lives, with the proper proportion dedicated to this work. It was very good to do what we did, and will be very good to move on to what becomes sensible.

To make a straightforward outline, definitely to be discussed and refined, a next phase of comparable length could deliver a fully operational basis Hardocs, with ability to be deployed to a chosen first set of users, to explore and prove its general worth.

It would operate the public aspect as well as private of the Habitat cloud, with initially simple search abilities, to begin that potentially wide arena of development.

An essential of the architectural design is the concept of References. This is the way developments of a given, made-public project could be included as components of another project. It's a strong concept, which needs some care in development, and in its relation from the beginning with searchability, though initially it would operate by personal communication rather than search-and-discover. Thus this essential it would be worked on early.

### Closing in by degrees, to make futures planning real, actually possible

We could go on with possibilities for future:  among them such things as text-base search sophistication, more general APIs where those could be suitable, and surely such things as a web-based, very visual discovery interface for which we have a nice model in CombatCovid, even as it was created in a formidable months of rush.

I would feel we should rather look at the kinds of processes which will fulfill much more firmly the OPEN, FAIR, and co-creation premises that we are  all highly interested to see better succeed, and perhaps which feel to fit well with a background of experience that's for myself included 20 years of consultancy at high enough levels in Europe.

Contemporary software practice is based on decades of experience by now, and its greatest discovery is that hard planning points are not feasible; that rather a successful project will be guided by its actual progress, and assign delivery points where significant accomplishments can be seen becoming ready to be deployed.

Thus what will work best for planning of Hardocs phases should appear to be sponsoring levels of effort, aligned to areas of goals. This will fit very well, in fact can be seen to be primary, in the concepts of reflective design and its co-creation, a primary goal of the guiding European Union program.

We should observe much alignment in concepts, here. And that is what can be said at the moment of closure for the Hardocs efforts already made, which used such approaches with high effectiveness, and much awareness of their advantages, all along the way.

### An example of possibilities, from what we've learned

There's a good example of what reflective process, especially in personally enthused co-creation, can achieve, which in our story drops out of all the complexity not mentioned here, but which was the arena of day-to-day growth and process, along this initial creation of Hardocs.

#### An initially well-heard, well-appreciated story

We initially heard from our subject experts and responded quite carefully to entirely understandable, and very strong concern, for the privacy of projects. This would sometimes result in what would be more widely sharable, but also in some instance clearly keep co-awareness and co-creation restricted very tightly, only to one lab and its carefully managed collaborators.

The initial concepts for this engaged lab-local computers, agreed to be well maintained, on which their data could be isolated fully, for such cases.

This in turn led us to the advantages of the controllably replicated CouchDB pattern, where in this hard-isolate case there would simply be no replication beyond the boundaries.

It's a solid architecture well proven, CloudDB, but one might observe that a reason IBM may have become so interested in it, would be the challenge of using its replication to provide world-wide scope. This is something they could, and do, sell high-value services to enable and support, for the clusters in locales, and the arrangemetns between locales are entirely challenging. Not probably beyond the abilities of some university IT departments, but it would be a special ability to invest in and provide, and thus something to consider for a fully possible Hardocs future.

#### Then, discovery...seeing how a story could develop, change...

In the course of this Hardocs exploration, there came a point to realize that the fundamental operation we think of as the cloud, could also be simply moved within a laboratory which required full isolation. Thus we eliminated need for what had been considered a 'laboratory stage' itself, on early diagramss -- it was not part of the picture now ordinarily, and could be this local Linux platform in an isolation lab whenever actually requested. Simpler, in every case.

Another step in thinking, though, brought our contemporary internet abilities into better relation, better focus for Hardocs.

By providing the highly secure identity process, and our strict private-public control within it, as described above, really as is so often depended upon for today's internet operations, there would be no need for a local level of physical security.

Infact, this is the current plan for normal Hardocs, and for any even highly isolated laboratory who on examination of the simple, strong basis of our security, agrees with it.

This position, then, opens again a formidably powerful story. In a matter of short months, we were able to design and construct a facility with effectively instant response, across the globe. To do this, we fronted GitHub's more limited servers with a database which effortlessly gives this level and scope of performance, once programmed for. This is the Fauna Database, a creation of the same persons who developed Twitter as a worldwide phenomenen.

The place we should mention but leave in our story is that the Habitat architecture of Hardocs could be arranged to substitute Fauna for the CouchDB. This would be not without effort, but that effort is imaginable, and the result would be to instantly give Hardocs the same kind of global instant reach that CombatCovid, and indeed Twitter, have.

The one consequence would be to leave behind the idea of in-laboratory isolated instances of Hardocs, via agreement that our security level is adequate; or just to say Hardocs is not a system for that.

The gain could be considerable, in the initial acceptance and longterm viability of a full Hardocs program. There are points to carefully consider, and we should examine them -- possibly with a small side program to progress such an idea more in the form of the initial Hardocs effort.

## Recompense

The points being made in the little story just above, one may feel, are actually not technical at all, but quite strongly in the arenas of co-creation, its support in degrees of openness of information, and perhaps most of all in the sensibilities of the seemingly strongly related concepts of reflective learning and design -- formidably, one may feel, in full and experienced consciousness of the human factors of projects which can lead to success in these approaches.

For one opinion, it is these essential human, day-to-day, awareness and judgement factors which stand to be most important of all, in the open enablement, co-creative cause.

That's what we all seem to have much instinct to develop to some intuited potential, and so this little story as one aspect of what has really happened in the originating Hardocs effort may be something each of us may find an interest in to use.

A hope in telling it, is understood; and there, a definite smile.

Please enjoy what we've done, and feel encouraged, on the road of things new, things developing that we can help and work with in our world, building our portions in its abilities to be satisfying.
