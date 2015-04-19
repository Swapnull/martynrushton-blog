---
title: The Importance of Source Control
summary: Source control is not used by all developers, in this article I explain why it should be.
date: April 12th 2015
template: post.hbt
tags: [git, svn, source control, programming]
---

The results of the [Stack Overflow survey](http://stackoverflow.com/research/developer-survey-2015) have been released. Most of the results are unsurprising in most respects, the most popular development language is Javascript, most users are on Windows and there is a deficiency of women in tech. The one statistic that stood out for me is the fact that almost 10% of developers still do not source control their work.

<p class="post-img">
  ![Stack Overflow survey Screenshot](/assets/images/post-images/source-control-results.jpg)
  <span class="caption">Screenshot of the source control results from the Stack Overflow survery</span>
</p>

15.9% of people who took the survey identified themselves as students, while 66.3% identified themselves as been in full-time employment. I know from been a student who has taken a year out to work in industry, that most Computer Science/Software Engineering students do not bother with, nor fully understand why and how to use source control. That is understandable as the vast majority only write the code they need for the class and don't spend hours programming just for the love of it. The worrying statistic is, if we say there was roughly a 4:1 ratio of professionals to students in the survey, we can then determine that roughly 7.5% of professionals do not use source control.

## Why should people use source control?

**Breaking changes** : All developers have had code break for, what they think is, no reason what-so-ever, for instance, while creating this site I managed to create a deployment problem because I had made a breaking change that stopped the blog engine from working. I could have very easily spent hours rummaging through code, staring at documentation and rewriting sections before it started working. Instead of doing that, I fired up git diff and found that I had accidentally removed the parentheses from a function, fixed in 2 minutes.

If the git diff had not shown me what I needed, I could have easily reverted to the last commit and lost 20 minutes worth of time, testing more often to make sure I am not making the same mistakes.

**Change Logs** : When working in teams, change logs are important. This could be kept in a word document, an excel spreadsheet or a text file, but these files are not only unreliable but they will not give as much information as a git log will. Git log gives you the exact time, date, message and user that made a commit, with the ability to actually see what they have changed. This does not only hold people accountable, it also makes people much more honest when adding to change logs and much less likely to commit poor code.

**Branching** : Branching is a complicated process, and for that very reason there are many tutorials out there, but it is an important concept. At its basic form imagine it as you save a copy of your code, lets call that the 'master' code. You then do your coding on a version called 'working'. This way, if you decide the changes you have made are not the way you want to go, you can discard your 'working' folder. However, if you decide you like the features, your 'working' folder becomes your 'master' and your old 'master' is discarded.

## How to use source control?
Fair enough, the theory behind source control is a solid one and that is why 90% of developers use it, but it is confusing and will make your head hurt at first.

**GUI Clients** : The most high level way of using source control is by using a client. By using one of the clients (such as Github for Windows or Tortoise SVN) you can easily source control your files almost like a file explorer and you never really have to touch a terminal.

**Text Editor Extentions** : Most modern day text editors (Atom.io, Sublime Text, Brackets) and even some IDE's (Visual Studio, Eclipse, Netbeans) have extensions that will allow you to source control your work from the place you write your code. Some of these can be quite tricky to use as they have tried to make them minimal and they are usually user created, but some people still find it easier than using a command line/terminal.

**Command Line/Terminal** : The classic, and in my opinion, best way of using source control is via the terminal. The terminal is an old and solid piece of software that most users still relate to the 1980's and films such as War Games. This is not the case, any modern day developer should be able to use a terminal, especially as most source control commands are two or three words long.
