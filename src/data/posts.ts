export interface BlogPost {
  id: string;
  title: string;
  date: string;
  category: string;
  readTime: string;
  summary: string;
  content: {
    type: 'paragraph' | 'heading' | 'list' | 'quote' | 'code';
    text?: string;
    items?: string[];
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "customer-service-dying-art",
    title: "Great Customer Service is a Dying Art and Why You Should Keep It Alive",
    date: "July 8, 2026",
    category: "Leadership",
    readTime: "5 min read",
    summary: "In a world where great customer service feels like a luxury, those who master the art of conflict resolution, team alignment, and emotional guidance have a massive competitive advantage.",
    content: [
      {
        type: "paragraph",
        text: "Why does great customer service feel like a luxury item our society can't afford anymore? I think great customer service is a dying art, but I think because of that there is a huge amount of potential for those willing to learn the art and lean into it."
      },
      {
        type: "paragraph",
        text: "My first job was working for Chick-Fil-A as a front counter \"team member,\" which was essentially the customer facing for the inside operation. I got a TON of experience working there, and though fast food as a first job isn't rare, what I think is quite rare is the dedication that an organization attributes to the values and culture they create - and Chick-Fil-A was all about customer service, and they went deep. I can remember sitting at the tiny circular table in the \"break room\" at the back of the Chick-Fil-A off of HWY 6 and West Rd in Houston, Texas, watching training videos explaining the Biblical principle of what they dubbed \"2nd Mile Service\"."
      },
      {
        type: "paragraph",
        text: "All of this training was a great foundation, but man, the experience was something else! People are crazy! I can remember a situation where I walked away feeling degraded by this woman, and I can remember feeling unsure about where the line was between standing up for myself and doing everything possible to serve the customer. This lady was usurping the system to treat me and my team members like garbage. I came away shaking and confused."
      },
      {
        type: "paragraph",
        text: "It wouldn't be until years later when I ran my own coffee company that I realized that there is a very important distinction to be made along these lines. I think great customer service is about becoming skilled at conflict resolution, and it starts with not being a pushover."
      },
      {
        type: "heading",
        text: "Developing a Backbone"
      },
      {
        type: "paragraph",
        text: "When I started my own coffee shop at 23 years old, I was the biggest pushover, which is bad. It's one thing to be a pushover for a customer, but it's another to be a pushover for your staff - that's a big problem. I had such an issue with telling people \"no\" or correcting action and behavior. I was more inclined to go out of my way to fix the problem myself than to tell one of my staff members what to do. I wanted nothing to do with confrontation and had an unrealistic expectation for how to manage a team."
      },
      {
        type: "paragraph",
        text: "It took way longer than I would like to admit for me to learn how to confront my staff and begin having hard conversations. Much of it came with practice and being in a position that forced me to face my fears, and also much of it came from a simple little practice that I would recommend to any and all entrepreneurs who haven't already implemented this - which is Vision, Mission, Values. I never could have guessed how much having a fixed set of values empowered me as a manager of people, but let me explain what I mean."
      },
      {
        type: "paragraph",
        text: "A simple list of like 4 values that the company upholds is the backbone by which you manage your team. If your values are honesty, integrity, generosity, and hard work and you have someone show up late to their shift for the 3rd day in a row, now your conversation with them is pointing out that they are showing by their behavior/tardiness that they are misaligned with the values of the company, and if they can't correct this behavior, they will need to go find another company that aligns with their values. It shifts the conversation from \"I\" and \"you\" to \"the company values\" and \"your values\". Now we went on this whole tangent because it took all of this for me to gain a backbone, stop being a pushover, and start supporting my team and holding them accountable to the values they agreed to uphold when they signed on with the company."
      },
      {
        type: "heading",
        text: "The Adult Sunday School Principle"
      },
      {
        type: "paragraph",
        text: "Now all of this does apply to customer service, I promise, but one more anecdote. When I was in college, I worked two jobs at the same time, parking lot attendant and children's Sunday school teacher, and one day I noticed the oddest similarity between these two jobs that changed the way I view the world permanently. What I learned was when I would tell people in the parking lot news they didn't want to hear, i.e. \"this parking lot is full, you'll have to drive across the street to park,\" they would get all mad, fussy, storm off, threaten to speak with my supervisor, etc. When I would tell 4-year-olds in Sunday school news they didn't want to hear, i.e. \"I'm sorry but I can't give you more goldfish,\" they would get all mad, fussy, and throw a fit, or throw a toy. What I finally realized is that all adults are just children; they just learned to mask it a little better. So I started dealing with adults the way I dealt with children, and it worked like a dream. Once I realized that all I needed to do was become skilled at guiding other people through their momentary emotional disruptions, it completely changed the game."
      },
      {
        type: "paragraph",
        text: "Fast forward to today, and I get excited dealing with customers who have emotional reactions to normal everyday circumstances, and the reason is that I know now where that line is between upholding company policy and standing up for myself and my team. Many customers become upset when their expectations were not met, and may have been misplaced from the start. These are the steps I follow when addressing missed expectations with customers:"
      },
      {
        type: "list",
        items: [
          "Listen to the customer",
          "Validate the emotional response",
          "Keep a calm tone",
          "Apologize, even if it is just \"I'm sorry for the miscommunication.\"",
          "Craft a solution, something like \"here's what I can do to make it right…\" and then address the core of what the issue is",
          "Ask them to sign off on it, \"Does this sound good to you?\""
        ]
      },
      {
        type: "paragraph",
        text: "At the end of the day, they can walk away and become someone else's customer, and that is a right that you can remind them of if things get far out of hand. I've said things like \"I'm more than happy to do x for you to solve this, but at the same time I totally understand if you want to go with another company at this point.\""
      },
      {
        type: "paragraph",
        text: "None of this is really new, but here is the final nugget. I talked about the line between being a doormat for a company and having a backbone for yourself and your team, and to me that looks like this. When a customer continues in a belligerent manner after you have offered a solution, and/or if they are attacking you or your team personally, you have every right to treat them like you would a 4-year-old, saying \"I won't allow anyone in this establishment to talk that way. Please leave now, or I will call the police and have you escorted from the premises.\" Obviously this can go various ways, but remember that depending on your industry, you can fire any customer, and if you have a storefront, they can be forever forbidden from returning."
      },
      {
        type: "heading",
        text: "A Lost Art"
      },
      {
        type: "paragraph",
        text: "I think with the cost of living increasing dramatically and the minimum wage not nearly enough to keep up, the first thing to go is customer service. Instead of seeing this as a sign of our society's decline, see it as an opportunity for you to stand out. No matter where you go or what you do, there will always be people to interact with. Knowing how better to cooperate with people, I think, will become more and more a rare art. I challenge you to become a student of this lost art."
      },
      {
        type: "paragraph",
        text: "If you enjoyed this read, please consider subscribing to the regular posts."
      },
      {
        type: "paragraph",
        text: "Catch you in the next one,\n\nJoel Friedrich"
      }
    ]
  },
  {
    id: "newsletters-to-kindle",
    title: "How I Send My Tech Newsletters to My Kindle with Apps Script",
    date: "June 7, 2026",
    category: "Technical",
    readTime: "4 min read",
    summary: "I enjoyed reading tech newsletters but hated reading them on a phone screen. Here is how I built a beautifully simple automatic delivery pipeline to my Kindle using Google Apps Script.",
    content: [
      {
        type: "paragraph",
        text: "I've been a subscriber to a number of tech newsletters for a while and I enjoy them… however, I want to have my cake and eat it too. Wouldn't it be lovely to just have them sent to my Kindle on a regular basis? This was my thought as I was trying to read a newsletter on my phone screen, much to my annoyance. So I made it with Apps Script, and it was so simple you should do it too."
      },
      {
        type: "paragraph",
        text: "I love e-ink displays. Ever since I saw the first Kindle, I fell in love with the technology. I've followed e-ink technology ever since. When Pebble, the e-ink smart watch, came out in 2014, I was an early adopter. Twelve years later, I still wear my Pebble smart watch on a daily basis.\nTo me, e-ink displays are this beautiful harmony of paper and tech that is as close as I've ever seen to a digital piece of paper (which I also have a great affinity for, I mean, who doesn't like paper)."
      },
      {
        type: "paragraph",
        text: "Being the e-ink display fan that I was, however, I never owned a Kindle because I didn't read often enough to justify actually joining the Kindle club. That all changed when an opportunity presented itself in the form of my wife's broken Kindle Paperwhite."
      },
      {
        type: "paragraph",
        text: "In 2021, my wife's Kindle screen gave out, and I thought, \"I'm savvy enough, I can replace it,\" and though I was able to fix it, not only was it cheaper at the time to buy a brand new one than to replace the screen (not including actual time spent fixing it), but I actually used expanding glue instead of regular super glue when re-adhering the faceplate back to the device. All of this put together meant not only did I pay more to save a dying machine instead of replacing it, but it also looks like a piece of crap - but it's my piece of crap."
      },
      {
        type: "paragraph",
        text: "This blog post is not about how the effort of a project is a sort of an investment into the value of that project and how it justifies doing the thing as opposed to replacing it because you'll value it much differently - this post is about how I used Apps Script to send regular newsletter subscriptions as HTML files to my Kindle to read them. However, I should write about that theory one day."
      },
      {
        type: "paragraph",
        text: "Kindle has this beautifully simple feature for sending files to your Kindle remotely, which is that any Kindle owner has an email account associated with their Kindle that they can use if they choose to. It defaults to something like \"amazon-username-8027501@kindle.com\". Users can send files attached to an email sent there, and those files will be automatically loaded onto the Kindle!"
      },
      {
        type: "paragraph",
        text: "The only requirements are listed here:"
      },
      {
        type: "list",
        items: [
          "It has to be a file type that the device recognizes. It could be epub, pdf, txt, html, etc. There are a bunch, and a quick search will give you the full list.",
          "The sending email has to be authorized in the settings for that device under the account. I probably didn't word that right, but in essence, on the Amazon account for that individual, you can add \"authorized sender emails\" to ensure that not just anyone can send you a file to your Kindle - that would be a serious security issue.",
          "The device has to be connected to the Internet (obviously). I think that goes without saying."
        ]
      },
      {
        type: "paragraph",
        text: "The Aha moment hit me one day when I was reading a tech blog on my phone and thought, \"I would much rather read this on my Kindle,\" and it was then I realized that a simple script in Apps Script connected to my Gmail account could search my emails when triggered for the title of the newsletter, fetch all the email body contents, and then smoosh it all together into a .txt file and send it in an email to my Kindle."
      },
      {
        type: "paragraph",
        text: "This is, of course, where Claude came in for the technicals. I knew it was possible, but of course there was some back and forth. I eventually landed on actually formatting the file as an .html file because then I could actually use links on the front page as a sort of table of contents for the 7 or so articles that come in on a regular basis."
      },
      {
        type: "paragraph",
        text: "I also found, for the tech blog itself, Pointer.io, that the site is actually a more reliable place to fetch the HTML of the blog. When in the newsletter email you select \"read online,\" it'll take you to https://pointerio.beehiiv.com/p/issue-${issueNum}, which became a really simple script to write in Apps Script for fetching, especially since the issues are released on a consistent basis. I just have to set up the trigger for when I know the next issue is out. I just have a variable in the script increase by 1 each time the script is run, and then boom, it all works in the background, and I can read my tech blogs how I want to."
      },
      {
        type: "paragraph",
        text: "In conclusion, the AI boom, for me personally, has been a boom of education, exploration, and innovation. I've been able to really put shoes on ideas that I have had with very little technical background. I've always been fascinated with programming and computer science, and AI has been an incredibly helpful tool for making steps that way - and not even for the purpose of occupation, but for the sake of fascination. This project is a realization of that dream. Thank you for joining me. If you enjoyed this read, please consider subscribing to the regular posts."
      },
      {
        type: "paragraph",
        text: "Catch you in the next one,\n\nJoel Friedrich"
      }
    ]
  },
  {
    id: "getting-more-out-of-ai",
    title: "5 Rules for Getting More Out of AI (Without Burning Through Your Limit)",
    date: "May 10, 2026",
    category: "Technical",
    readTime: "5 min read",
    summary: "As the AI landscape evolves rapidly, learning how to optimize your conversations for high efficiency and lower token usage is an essential workflow skill.",
    content: [
      {
        type: "paragraph",
        text: "I was talking with a friend yesterday about some of the projects I was working on with Claude and he asked me, “What plan are you on with Claude?”, and as a frugal / cheap individual I stated, “Just the pro plan or whatever is $20/month”."
      },
      {
        type: "paragraph",
        text: "He replied, “Well I am too but I am constantly hitting my limit on conversations, are you running into that?”"
      },
      {
        type: "paragraph",
        text: "“Typically I’m not hitting my limit..” which is true. I won’t bore you with the conversation any longer but the point of it was I came away thinking how are other users optimizing their AI conversations for best results and lowest token use. So I came up with a short list of self-imposed rules or guidelines for prompting AI. These are things I’ve started to slowly implement to make minor improvements to how I use AI in my workflow. Quick note — these are constantly changing as the landscape changes, but as of this post these are my AI use guidelines:"
      },
      {
        type: "heading",
        text: "Rule 1: Everyday questions are still a Google search."
      },
      {
        type: "paragraph",
        text: "This one is self explanatory and subtle but I think they make a huge difference. Whether you need to find out what the tire size is on your 2005 Scion or what the voltage drop equation is again these are quick informational searches and 98% of the time the AI summary at the top of the Google search (if you’re into that sort of thing) is sufficient to point you in the right direction."
      },
      {
        type: "paragraph",
        text: "The reason I came up with this rule is because I was replacing my web searches with AI initially as it was becoming my go-to for everything, then when I was hitting limits I realized the flaw in my thinking. There are no limits for Google searches and using the AI summary that comes with that, just don’t go into a search needing to have a detailed conversation with an AI."
      },
      {
        type: "heading",
        text: "Rule 2: Choose the Model Contextually."
      },
      {
        type: "paragraph",
        text: "When prompting I ask myself, “what is the purpose of my request?”, meaning am I asking open ended questions that are more exploratory like, “what are some industries that have been born from the discard/waste of other industries?” — if so, then I would start with a basic model that uses a lower token rate (though arguably you could use Sonnet for this as well). Conversely, if you are needing a deep dive into a highly specific theory or concept then I would use a higher thinking model. This will certainly use more of your tokens and reach limits faster, but it’s about getting to the point more efficiently than going back and forth with a lower model that isn’t quite getting you what you need."
      },
      {
        type: "quote",
        text: "“Hey I have an idea I keep thinking about when I want to verify the validity of an email. There are plenty of services out there you can pay to use to validate emails however I don’t like to pay. The idea I have is essentially a burner email account that when prompted sends a dummy email to the prospective account. If the email is kicked back it’s obvious that the account is not valid. If it’s not kicked back then it’s a real email address. It doesn’t matter if the email is sent to spam because the point isn’t to get attention of the user or even into their inbox it’s just to validate the address. Talk about why this would or would not work”"
      },
      {
        type: "paragraph",
        text: "This prompt, though lengthy, necessitated a deeper dive than a surface level search, or a simple re-format this or summarize that. I needed an understanding of how competing services for email checking even worked before it could validate/invalidate the idea."
      },
      {
        type: "heading",
        text: "Rule 3: Think Before You Prompt."
      },
      {
        type: "paragraph",
        text: "I am the type of person who has 5 ideas a day of different projects or widgets and generally all 5 are bad, and every once in a while 1 is good. Part of my problem with AI has been as soon as the thought crosses my mind I’m prompting AI asking, “what are some of the challenges that face a bread delivery company that uses no fossil fuels, only bicycles” only to realize that this is a dumb idea for a suburban area and I don’t need an AI to tell me that."
      },
      {
        type: "paragraph",
        text: "One of the subtle things that has occurred from this actually is after I get my stupid ideas shot down by AI, not only have I “wasted” those tokens, but I feel like I’ve had the wind knocked out of me. Ideas in themselves are a gift and a precious commodity and when an idea is so quickly extinguished there is something that physically occurs that I can only describe as the feeling of dejection. To combat this I keep an “idea journal”. I jot down my thoughts and ideas as they come, I enjoy the excitement and I let them sit there for a bit."
      },
      {
        type: "paragraph",
        text: "If an idea keeps coming to me then I have had time to think about it and I’m able to articulate in a prompt what specific goals I have to begin prototyping the idea. AI aside, this has been a boon for my ideation process and highly recommend something like this to anyone flooded with ideas on a daily basis."
      },
      {
        type: "paragraph",
        text: "Think before you prompt at its core is, what is the end goal of this conversation and what is the first step to take in order to get there. If you can master that then you’re well on your way to higher efficiency, also you’ll free up more emotional energy."
      },
      {
        type: "heading",
        text: "Rule 4: Find the Right Workflow for the Task."
      },
      {
        type: "paragraph",
        text: "A lot of the prototyping that I do is for quick webapps that solve a niche problem. E.g. stopscrollingyoutube.com is a site I built with Firebase Studio (now Google AI Studio) that allows you to view YouTube videos ad free but has no ability to scroll, or our-k-list.netlify.app which is a website that allows you to track, rate, and comment the shows you and your friends have watched. I was trying to use straight Claude Code for these things but I hit my limit so fast and without knowing even what I had made."
      },
      {
        type: "paragraph",
        text: "I like an IDE that I can see the prototype UI on screen like a real vibe-coder. This is the workflow I’ve been using that keeps my tokens low (comparatively) and I’m still able to publish prototypes from my phone on a Saturday morning:"
      },
      {
        type: "list",
        items: [
          "Start with a highly specific prompt to Claude Chat asking for a prompt to submit to Google AI Studio.",
          "Next, submit that resulted prompt to Google AI Studio.",
          "Generally there is some back and forth with the Google AI Studio to iron out some kinks, and if there are bigger issues then I ask Claude Chat the best way to address them and again prompt the Google AI Studio.",
          "Once a prototype has landed I commit to GitHub (straight from Google AI Studio).",
          "Finally my Netlify account is connected to my GitHub and I just have it publish that repo."
        ]
      },
      {
        type: "paragraph",
        text: "Obviously this is for a relatively basic web app, if you need to do authentication or connect a database I would use Claude to guide you on that, but all of this is technically free depending on what you’re building, and that is pretty powerful."
      },
      {
        type: "paragraph",
        text: "The main focus of this rule is there are ways out there to spread the load of AI use optimized for a specific task that doesn’t require you to have 100 burner Gmail accounts all with free ChatGPT."
      },
      {
        type: "heading",
        text: "Rule 5: Don’t Use AI to Do Python’s Job."
      },
      {
        type: "paragraph",
        text: "Recently I spent about a month working on a webform handling Zap in Zapier that was supposed to check if an incoming client was an existing customer or not in a Jobber (CRM) database. The main issue was that with the API actions provided you could only compare a Full Name or Email to see if the client existed already. The key issue was the “or” — you can’t check for both. All in all what I was trying to do is use an AI model in the Zap to compare incoming webform data (name, email, address, phone, etc) with existing data found in the CRM and the results were … bad. I could not figure out how to make it work effectively and in the end gave up. My biggest fear though, even if I was able to make it work, was relying on a model that could act unpredictably."
      },
      {
        type: "paragraph",
        text: "I realized though that this task was a perfect candidate for a simple Python script. Once I made that shift the whole workflow fell into place and handled all the variations. I had boolean outputs depending on if the email, address, or phone matched and then had half a dozen actions dependent on those outcomes."
      },
      {
        type: "paragraph",
        text: "My takeaway has been if it’s repeatable then use AI to help write the script that you can rely on forever, that way it’s far more reliable and you don’t pay each time you need to have that task completed."
      },
      {
        type: "heading",
        text: "Closing Thoughts"
      },
      {
        type: "paragraph",
        text: "Reaching your limits on a model is not the end of the world - in fact if anything it shows that you’re likely using what you have to its full potential, which to me is a win. Though it really sucks to be in the middle of a highly technical project and nearing the finish line only to see that you won’t be able to ask anything further until 1:30pm tomorrow. I hope these rules were somewhat insightful, or at least challenge you to think outside the box when using AI, I know for me it is an entirely new learning process. If you enjoyed this read please consider subscribing to the regular posts."
      },
      {
        type: "paragraph",
        text: "Catch you in the next one,\n\nJoel Friedrich"
      }
    ]
  }
];
