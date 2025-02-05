---
layout: page
permalink: /fanfiction/
title: fanfiction project
#description: Materials for courses you taught. Replace this text with your description.
nav: true
nav_order: 6
---

Hi! I’m guessing you’ve found this page because I left a comments on one of your fanfics. I know that most of you have probably spent hundreds (if not thousands) of hours writing these stories, and I recognize that I am asking a very large favor from you. In order to hopefully put your mind at ease, I've shared more information about myself and the project down below.

**My background and motivation**

I have a M.A. in Literary and Cultural Studies, and I'm interested in studying retold stories through the lenses of formalism, genre studies, reception studies, and digital humanities. In my “digital humanities” research, I use math and computer science (but **not** generative AI) to analyze broad trends in literature and culture. <span style="color: red;">I am particularly interested in applying computational tools to study fanfiction and fan communities.</span> Through such tools, I’ve been able to look at thousands of fanfics and calculate things like what their most frequently used words were or how often they used certain rhetorical devices. Obviously, though, fanfics are much more nuanced than simple word counts could reveal, and I would like to develop more advanced tools that could be used to study fanfiction (or literature more broadly), focusing particularly on calculating story similarity.

**This projects**

<span style="color: red;">In order to develop good tools, we first need a collection of fanfics to use as a test set.</span> That way, after we say something like “calculating the ratio of happy to sad words in every chapter can reveal the emotional arc of a story” we can go look at a group of fanfics and see if that actually holds true for them. We were particularly interested in including your fanfics in our test set because you tag your stories really well and because they feature substantial plots. 

**How your stories would be included in our paper**

If we publish a paper about our research project, we might mention some of your stories in the paper, to this effect: “Computational method XYZ was particularly good at identifying similar plots between stories that otherwise have drastically different settings. For example, it identified that fanfic #14 and fanfic #37 are both murder mysteries even though fanfic #14 is based on a police procedural set in Hawaii, and fanfic #37 is based on a detective series set in Victorian England.”

We are also planning to include the test set alongside our paper. This would allow other researchers to a) know that we weren’t just making up claims about the computational methods we were testing and b) potentially build upon our research and find better computational methods. The test set would include the texts of the fanfics and some of their metadata (e.g. story tags), alongside measurements for how similar we think pairs of stories are within certain categories (e.g. fanfics #14 and #37 have plots that are 90% similar, settings that are 30% similar, etc.). We would replace fanfic titles and AO3 pseudonyms with numerical IDs to protect author identity. In order to access the test set, people will have to confirm that <span style="color: red;">they are not going to use the stories to train AI models</span>.

**Who else is working on this project**

I'm working on this project with Emma Strubell and Amanda Bertsch, a professor and phd student I met at Carnegie Mellon University. Though it can be *very* scary to let CS people anywhere near your creative material, I want to assure you that these are really cool (and ethical) CS people.
Emma's two main research focuses are a) how machine learning tools can be made actually useful to non-computer scientists and b) the environmental impact of AI. Thanks to them, I now feel guilty every time I use Chat GPT instead of a thesaurus lol
Amanda's research interests include long-context embeddings (i.e. how can you computationally represent very long texts) and responsible dataset construction (I particularly like [this paper](https://aclanthology.org/2022.gebnlp-1.24.pdf) she wrote about how ML models learn gender biases from the data they are trained on). She also helps run (Queer in AI)[https://www.queerinai.com/].

# **How is your project any different than training Chat GPT using our stories?**

# Any time you give Chat GPT input data or train an AI model, the model remembers the input data and uses it to make all future decisions. For example, if you gave Chat GPT 100 fanfics in which Sherlock Holmes and John Watson fall in love, and then you (or even a completely separate user) asked Chat GPT to tell you a story about Sherlock Holmes and John Watson, Chat GPT would be more likely to tell you a story in which Sherlock and John fall in love than it was before you showed Chat GPT those fanfics. The models we are creating are almost like (really, really fancy) calculators in two ways 1) calculators don't remember every previous input and use them to learn or make up new math 2) calculators give you a numerical output. 



