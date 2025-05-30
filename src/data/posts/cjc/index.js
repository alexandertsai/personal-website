import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
// import image4 from './images/image4.png';
// import image5 from './images/image5.png';
// import image6 from './images/image6.png';

const post = {
  id: 2,  // Remember to update this for each new post
  slug: "ai-for-youth",
  title: "AI For Youth",
  date: "25 May, 2025",
  category: "Reflection",
  preview: "A reflection on my time spent with my CJC students.",
  content: `

### Overview
I recently completed my 26 hours with students from Catholic Junior College (CJC). I taught them
Intel's AI For Youth course. We covered most of the AI basics: Python, Numpy, Pandas, GenAI, Fine-Tuning, GANs, diffusion models and so on.

I wanted to write a blog post today to reflect and talk about some of the things I learned from this. It was a heartwarming journey that I hope
you (the reader) might gain some insight from!
### Challenges and Solutions
Throughout the course we would use Google Colab notebooks to run through most of the concepts. I'd usually start with
the whiteboard and slides and then show some of the real code implementation examples. It was really heartening to see the students light up when they could see *something* happening.

![GAN-model](${image2})
*A GAN model being trained to recognise numbers*

At first I had tried to stick to the provided course tools. One software that students were required to use was called 'Orange Data Mining'.
The issue was that some students were using chromebooks or only had iPads, so some of them couldn't download it. I eventually did almost everything on Google Colab. 
The lesson here is that Google Colab really saves lives — it's like Docker for teaching (I hope that made sense).

Another issue was attention. Frankly, it was hard to always keep the students listening. They would wander off into their own world on their laptops
or start talking to their friends. My clever solution was that I would bring a rubber duck!
![rubber-duck](${image3})
*My rubber duck (left) next to my friend's not-so-rubber duck (right)*

I think I bought this thing for $1.50 from Shoppee. I remember being really inspired by the concept of rubber duck debugging
— so much so that I had to purchase my own rubber duck. The wonderful thing about this duck is that when you squeezed it, it would
make this extremely obnoxious loud squeaky sound. Therefore, when I needed the student's attention, I would simply give my duck a squeeze.
It was almost pavlovian how they gradually started to become accustomed to the duck's cry as the signal for lesson to commence. I was proud of myself
for this idea because my voice was beginning to become very hoarse.

I tried my best to be a really understanding teacher. Some students weren't really interested in the lesson so I tried
to be accommodating and allowed them to pursue whatever they found to be interesting — as long as it was productive.
I recall approaching one student and asking him how everything was coming along. He told me he wasn't really interested in the lesson.
I went "Okay, what would you like to do instead?" He told me he wanted to read about Gravastars. He then showed his screen which displayed a paper titled *Gravastar model in
the structure of f(R, Lm, T) modified theory of gravity*.

I recall feeling very surprised seeing him reading about that.
I think being in SMU for so long has caused me to forget sciences such as physics or biology existed.
He then continued by saying his father was a physicist and that he want to follow in his footsteps. Clearly, there was no way
that I could say no to that. So I told him that it's completely fine to continue reading but on the condition that we talk about the paper next week.


At the end of the course they were required to do a project. 

![student-project](${image1})
*One of my students utilising OpenCV to make an attendance tracking system*

I tried my best to help them through the various aspects of the project. While I taught them the basics of Python, most of their desired projects
went beyond that scope. We unfortunately had to resort to LLMs to get something out. I'm glad to say that most of them 
managed to come up with something at the end and submitted!

### Reflections

I've always loved teaching. I'd attribute a lot of my success today to some of the great teachers in the past I've had.
I still remember failing Mathematics when I was in secondary 2. Then I met my new teacher in secondary 3: Mr Chen. He was 
such a brilliant guy. You could tell he enjoyed what he was teaching and he had a deep passion for it. Perhaps that
passion somehow diffused into me too because I started to really enjoy the study of Mathematics. Especially pure Mathematics
— where we would ponder for hours on end about how to prove a triangle was similar to another and then when you got it
you'd just jump up and start scribbling down the proof.

I'm not sure if I was ever able to convey that same energy and that same passion to my students in CJC. I definitely tried my best
to do so. I tried to make my lessons holisitic in some ways. We would talk about 

### Code Example
If you want to include code, use this format:

\`\`\`javascript
function example() {
  const data = "Your code here";
  console.log(data);
}
\`\`\`

## Another Section

- You can use bullet points
- To make lists of items
- And organize information

### Final Thoughts

Wrap up your post with concluding thoughts or a call to action.
`
};

export default post;