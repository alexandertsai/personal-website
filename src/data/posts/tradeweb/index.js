import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
const post = {
  id: 3,  // Remember to update this for each new post
  slug: "tradeweb",
  title: "Tradeweb",
  date: "11 July, 2025",
  preview: "My lovely time as a summer 2025 intern.",
  content: `

I loved my time here. Everyone was so, so sweet. My first good memory was meeting Allison during my second week. We were having a teams meeting when my boss (Sean) introduced me, saying: “This here is my intern Alex.” Another person (Lia, Allison’s boss) in the meeting then went “Oh! This is my intern Allison.” So after being introduced naturally I had to unmute and go “Hi!”. I think it was Lia that then said: “you two should meet!”. So Allison goes “yeah definitely!” and I kinda copy her and say “yes definitely!”. 

But honestlyyyy I was just going to sit at my desk. Because the previous times when someone said we should definitely meet, we never ended up meeting... But to my super pleasant surprise,
Allison then messaged me on Teams. She came to my desk and we had a short conversation. I realised she was doing data science too. I talked to her a bit
about boosting and bagging and showed her this (cmd/ctrl + click to open in new tab) [stack overflow](https://stats.stackexchange.com/questions/372634/boosting-and-bagging-trees-xgboost-lightgbm) post
which I found to be hilarious. So we nerded out a bit and it was really relieving to find someone else who got what I was talking about!

We ended up becoming pretty good friends because we were just about the only data science interns in this place. It was honestly therapeutic to just talk to her about
what I was working on, and then she would share what she was working on, and we would give each other ideas about what to do next. I especially
loved when one of us would run into the problem and ask the other to look at the code.
![photo-of-people](${image1})
*Allison and I at Central Park*

My second good memory was probably with Aly and Trisha. But before going into that memory I'll introduce them. Aly (short for Alykhan) was a technology intern from the New Jersey office. But since his team
was in New York, he would come down to the New York office pretty often. I distinctly remember the first time I spoke to him was on a pretty
random occasion. He was standing around waiting for someone. Now I can't remember if he came up to me or if I went up to him,
but we just started asking each other about what we were working on. He told me he had this task where he had to classify some text into different
categories. I ended up giving him a few recommendations (BERT, Naive Bayes). We ended up talking a couple more times after that and got pretty close!
Aly was honestly a bit of a nerd. He would always be talking about planes, credit cards, math, or physics. But even though I didn't really have any
interest in planes or credit cards, it was almost invigorating to hear him discuss them with such zest and passion. You would think a normal person
couldn't possibly care that much about the airline miles associated with different credit cards, but he did.

Trisha was my capstone groupmate. She was remote for the most part, so the first time I met her was much later into the internship when
she came to visit the New York office. After some pleasantries, she told me she wanted to try meeting as many people as she possibly could. 
We ended up going around almost the entire office trying to find any intern I knew (or barely knew) to introduce Trisha to. But Trisha turned out to be a
really fun person to be around. After introducing her to Aly, the three of us kinda hit it off. That afternoon we went to get lunch together at Taco Bell.

That brings me to my second good memory. That night, we decided to head to this Indian Restaurant (Bengal Tiger) to have dinner together. The food
was honestly decent, but the company was fantastic. This was my first time going out for a meal with friends from my internship so I would say this memory
holds a special place in my heart. While eating we talked about all sorts of things, like whether we liked Tradeweb and
where we saw ourselves in the future. I ordered some Tikka Masala (I think) which when paired with rice was heavenly. 

![me-and-friends](${image2})
*Aly, Trisha and I at Bengal Tiger*

The most hilarious part was probably when the receipt came. Aly, when ordering, had told the server that he did not want his food to be spicy AT ALL.
He was practically begging the server, going: "Please make it as non-spicy as possible". I guess Aly really doesn't like spice. Anyway, when the receipt
came, we burst into laughter. Just look below.

![the-receipt](${image3})
*Spice Level: For KID*

We ended up walking Trisha back to her hotel after all of this. Then Aly and I headed our separate ways.

During my last few days, I felt kind of sad. 6 weeks is honestly way too short. I am writing this post at 3am on the 11th of July (my official last day)
and I think I am going to miss the people here a lot. The work was a lot of fun for sure, and I'm super grateful I got work on an amazing project, but it really
was the people around me that created that environment for the work to be enjoyable in the first place. It was a bit bittersweet because it'll be pretty
difficult for me to see these people again, given they all study in the states while I'm back in Singapore. I'm not saying I'll never see them again, but realistically, there's not a super high chance :/

I might make a separate post on the other things I did in New York, and maybe another post discussing XGBoost for financial modelling (this was the project I spent the most time on).
But importantly, while I'm glad I got to learn a bunch about fixed-income securities, machine learning, and Tradeweb in general, at the end of the day,
I still think the biggest takeaway was the people I got to meet. You've probably heard of this corny and borderline-satirical phrase, but 
maybe it really was the friends we made along the way.

![my-favourite-people](${image4})
*I'm gonna miss you guys :(*
`
};

export default post;