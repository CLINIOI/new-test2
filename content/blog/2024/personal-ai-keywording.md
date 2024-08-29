---
title: "Personal Ai Keywording"
date: 2024-07-29T08:33:49+03:00
draft: true
---

## ChatGPT

This could have been the first thing to consider: why not do it yourself with ChatGPT? But we will take it one step forward, not only we will analyze the image using ChatGPT, but **we will create an app to analyze an image with ChatGPT**. No less, than a competitor to PhotoTag and VisualMind. And we will do it in less than 5 minutes.

First of all, I don't want to bother with hosting the page itself somewhere. But there was an exciting development recently, called Claude Artifacts. When you generate engineering anything, Claude (company behind models such as Claude Sonnet 3.5) will host the code for you in some form that allows it's execution. And I kid you not, we will generate and run the whole image analysis app right now.

Yes, I realize it's cruel to make Claude AI to create a page to use ChatGPT but I did not have Claude API Key and I did have OpenAI API Key so this was a necessary sacrifice to make this work.

### Creating a full web app from scratch in 5 minutes

Here's a prompt I used:

> You're an expert web programmer. I would like you to create a web page as an artifact that allows to select a local image and this image will be sent to ChatGPT API. The API will return me a Title, Description and Keywords (comma-separated list) that will be good for microstock photography websites. Description should be below 200 characters and Title should be below 70. Website artifact that you will create should allow to customize the prompt sent to OpenAI and also to set my own API Key

![Claude prompt and app](/images/posts/2024/ai-keywording/claude-ai.png "My first failed prompt, but the app (on the right) looks decent!")

Claude made 2 mistakes:
1. It used now defunct `gpt-4-vision-preview` model
2. It messed something up with the image encoding in a request to OpenAI.

I did not want to read the code, so just asked it to "fix it", literally:

![Fixing Claude error](/images/posts/2024/ai-keywording/fixing-claude-error.png "Just ask it to fix it!")

After this, the webpage was fully functional and, although it has a problem with right margin and that text overflow, it does work!

![Result of ChatGPT](/images/posts/2024/ai-keywording/chatgpt.png "Crude, but working!")

### Keywords

Here's the metadata it generated:

{{< data-table >}}
Field | ChatGPT + Claude | The Original
--- | --- | ---
Title | Climbers Conquering a Snow-Capped Mountain Ridge | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
Description | A group of climbers traverses a snow-covered ridge against a clear blue sky. They are roped together, showcasing teamwork in a challenging alpine environment. | Tied climbers climbing mountain with snow field tied with a rope with ice axes and helmets
{{< /data-table >}}

No fuss, but with tweaking the prompt, I'm sure it will become on par with anything else here (maybe sans the keywords).

As for the actual keywords, here's the list: `mountaineering`, `snow`, `climbers`, `teamwork`, `alpine`, `adventure`, `outdoor sports`, `rugged terrain`, `winter`, `hiking`, `summit`, `peak`, `rope`, `landscape`, `cold weather`. Not many "money keywords" included, but this is a super rough sketch and with some prompt engineering you can get better results.

### Moving forward

[Here's](https://gitlab.com/-/snippets/3732647) the actual code that Claude has generated. I did not fix the margins and overflow to show that it was this real from the first shot. It can be taken quite far by asking for more edits and improvements from Claude and in an evening you can have your own bare-bones "PhotoTag.ai".

Please note that for security reasons code will not work when opened on Claude website (in the chat, as an artifact), but if you download it to your computer and open in any browser, it will work.

### Price

The biggest influence here is that having API Key is way cheaper than subscribing to ChatGPT Pro. OpenAI has a couple of options that affect pricing, such as resolution of the patches that are used to "survey" an image, but the resulting price should be around 3-5 times cheaper than any solution mentioned in this blogpost (especially Pixify). The reason to pay more is, of course, the convenience.