"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[1045],{2190:function(e){e.exports=JSON.parse('{"blogPosts":[{"id":"/meetup-content-review","metadata":{"permalink":"/zh/blog/meetup-content-review","editUrl":"https://github.com/apache/incubator-eventmesh-site/edit/master/blog/blog/meetup-content-review.md","source":"@site/i18n/zh/docusaurus-plugin-content-blog/meetup-content-review.md","title":"\u793e\u533a\u4f1a\u8bae\u5185\u5bb9\u56de\u987e","description":"|Data|Topic & Videos|","date":"2022-10-25T08:08:52.000Z","formattedDate":"2022\u5e7410\u670825\u65e5","tags":[],"readingTime":0.15,"truncated":false,"authors":[],"frontMatter":{},"nextItem":{"title":"Born at China\u2019s WeBank, now incubating in the ASF - Introducing Apache EventMesh","permalink":"/zh/blog/introducing-apache-eventmesh"}},"content":"|**Data**|**Topic & Videos**|\\n|:----|:----|\\n|17/05/2022|[\u89e3\u51b3SaaS\u7ec4\u5408\u5f0f\u5e94\u7528\u96c6\u6210\u6807\u51c6\u5316\u95ee\u9898--EventMesh\u5728\u534e\u4e3a\u7684\u5b9e\u8df5\u5e94\u7528](https://www.bilibili.com/video/BV1cA4y1d7uw/?vd_source=7fa3cce048d504c8a511cfe78a2ec8c5)|"},{"id":"/introducing-apache-eventmesh","metadata":{"permalink":"/zh/blog/introducing-apache-eventmesh","editUrl":"https://github.com/apache/incubator-eventmesh-site/edit/master/blog/blog/introducing-apache-eventmesh.md","source":"@site/blog/introducing-apache-eventmesh.md","title":"Born at China\u2019s WeBank, now incubating in the ASF - Introducing Apache EventMesh","description":"Guangsheng Chen, the founder of Apache EventMesh, has been buzzing since the project was welcomed into the Apache Software Foundation (ASF)\u2019s incubator in February 2021.","date":"2021-06-29T11:14:52.000Z","formattedDate":"2021\u5e746\u670829\u65e5","tags":[],"readingTime":4.57,"truncated":true,"authors":[{"name":"Priya Pradeep","title":"Priya Pradeep is a freelance reporter for The Stack.","url":"https://thestack.technology/author/priya-pradeep/","imageURL":"https://thestack.technology/wp-content/uploads/2021/05/priya1-300x300.jpg"}],"frontMatter":{"title":"Born at China\u2019s WeBank, now incubating in the ASF - Introducing Apache EventMesh","author":"Priya Pradeep","author_title":"Priya Pradeep is a freelance reporter for The Stack.","author_url":"https://thestack.technology/author/priya-pradeep/","author_image_url":"https://thestack.technology/wp-content/uploads/2021/05/priya1-300x300.jpg","date":"2021-06-29T11:14:52.000Z","description":"Guangsheng Chen, the founder of Apache EventMesh, has been buzzing since the project was welcomed into the Apache Software Foundation (ASF)\u2019s incubator in February 2021.","image":"https://thestack.technology/wp-content/uploads/2021/06/ricardo-gomez-angel-3pBHB-bmGno-unsplash-780x470.jpg","hide_table_of_contents":false},"prevItem":{"title":"\u793e\u533a\u4f1a\u8bae\u5185\u5bb9\u56de\u987e","permalink":"/zh/blog/meetup-content-review"}},"content":"Guangsheng Chen, the founder of Apache EventMesh, has been buzzing since the project was welcomed into the Apache Software Foundation (ASF)\u2019s incubator in February 2021. There\u2019s a growing community supporting work on the open source software \u2014 used to decouple the application and backend middleware layer \u2014 and induction into the ASF incubator is further welcome lift, writes Priya Pradeep.\\n\\n\x3c!--truncate--\x3e\\n\\n![Image](https://thestack.technology/wp-content/uploads/2021/06/ricardo-gomez-angel-3pBHB-bmGno-unsplash-780x470.jpg)\\n\\nThe founding members of Apache EventMesh include software professionals from China\u2019s WeBank, Oppo and OpenMessaging communities. The project \u2014 born at China\u2019s WeBank and first open-sourced on [GitHub](https://cwiki.apache.org/confluence/display/INCUBATOR/EventMeshProposal) in September 2019, gaining 250 stars and then forked more than 70 times in a matter of few months \u2014 is the first Chinese fintech-founded project to make it into the Apache Incubator.\\n\\nAs a result Chen is keen to get more people involved in the community through the ASF and diversify its contributor base as interest grows: with 227 million+ lines of code under stewardship, 40,000+ contributors and 350+ live projects, the ASF remains a key forum for open source projects.\\n\\n## What is Apache EventMesh?\\n\\nIn Gartner\u2019s 2019 [Top 3 Trends in Application Architecture](https://www.gartner.com/en/documents/3970797/top-3-trends-in-application-architecture-that-enable-dig) That Enable Digital Business report, the number one trend \u201cMesh Application and Service Architecture\u201d had \u201cEvent Mesh\u201d technology as its core.\\n\\nEssentially an [event mesh](https://solace.com/what-is-an-event-mesh/) is \u201can architecture layer that allows events from one application to be dynamically routed and received by any other application no matter where these applications are deployed, even without a cloud. It is a configurable infrastructure layer for distributing events among decoupled applications, cloud services and devices. It bridges applications and services in an event-driven architecture (EDA)\u201d.\\n\\nThink of it as a [way to distribute events](https://solace.com/what-is-an-event-mesh/) among decoupled applications, cloud services and devices; an architecture layer that allows \u201cevents from one application to be dynamically routed and received by any other application no matter where these applications are deployed (no cloud, private cloud, public cloud).\u201d\\n\\nA simple everyday example could be: A pricey London gym offers a customer flat 50% discount on luxury \u201cathleisure\u201d from France, if joining the gym for a \xa31,200 yearly membership. As the salesperson swipes your credit card, transaction events happen between these retail points\u2019 electronic billing systems in disparate environments. The cohesion of these events without cloud architecture is carried out via an event mesh, a relatively new kid on the block in the world of event communications.\\n\\nApache EventMesh itself has four primary components:\\n\\neventmesh-runtime : an middleware to transmit events between event producers and consumers, support cloud native apps and microservices.\\neventmesh-sdk-java : currently supports HTTP and TCP protocols.\\neventmesh-connector-api : an api layer based on OpenMessaging api and SPI pluggin, which can be implemented by popular EventStores such as IMDG, Messaging Engine and OSS etc.\\neventmesh-connector-rocketmq : an implementation of eventmesh-connector-api, pub event to or sub event from RocketMQ as EventStore.\\n\\nEventMesh-enabled software is used routinely now in major industries like the banking sector, telecom, automobile and aviation across the world. In 2018, [Gartner](https://www.datanami.com/2019/11/18/why-event-meshes-should-be-on-your-iot-radar/) proclaimed that 80% of new enterprise ecosystems will require support for event processing in the coming years and it would be a required characteristic by 2022.\\n\\n## Moving on from ESB\\n\\nAn event mesh\u2019s earlier incarnation was the Enterprise Service Bus (ESB). Chen\u2019s take on the advanced Apache EventMesh is, \u201cWhile an ESB would offer you a good feature set, the main challenge with ESBs was the monolithic architecture and tight technological coupling between business logic and platform, which lead to a technical and organisational centralisation. Whereas Apache EventMesh is designed to improve on these limitations of a traditional ESB.\u201d\\n\\n(An ESB architecture, crudely, lets you integrate different applications by putting a communication bus between them so each application can talk to the bus. While providing a well defined, pluggable\u201d system, ESB can become the bottleneck to implementing changes, with all required changes \u2014 which might vary wildly across a business \u2014 added to a typically slow-moving ESB change queue. Implementing multiple ESB instances to support multiple business domains can rapidly get very expensive and not always prove hugely cloud-friendly.)\\n\\n## Why Apache EventMesh?\\n\\nAs Chen describes it: \u201cApache EventMesh provides standard protocol such as cloud events; interface such as http, tcp etc.; and pluggable storage engine with the [Apache RocketMQ](https://rocketmq.apache.org/) as the default back-end storage. Compared to other mesh-based applications in the market, our platform supports fancy features like extreme low latency and stability, and cloud-native architecture.\u201d However, Chen knows there is stiff competition primarily from AWS and Azure who have made similar products such as EventGrid and EventBridge; and other competitors from Asia, Canada, and the U.S.\\n\\n## Advantages of using Apache EventMesh\\n\\nDevelopers have the underlying architecture already built for them; hence they can concentrate on coding event-driven applications faster.\\nAgility increases as developers can operate applications with high volume of events across global networks in real time amongst hybrid clouds.\\nIt compliments serverless technology and is scalable to modern applications that are characterised by loosely coupled elements performing amongst distributed cloud architecture.\\nCapable of asynchronous system communications.\\nGreater security during transmission of event messages.\\nPossesses technical advantages such as millisecond delay and 100 million message processing capabilities.\\nIs embedded with tool assistance to achieve fast and automatic isolation of faulty applications.\\n\\n## The Future\\n\\nApache EventMesh is a work in progress. Chen acknowledges, \u201cWe are continuously improving, and dealing with the need to address complexity brought in by heavy clients based on the pull model; event-based streaming; and, the openness of event metadata and mixed media storage.\u201d"}]}')}}]);