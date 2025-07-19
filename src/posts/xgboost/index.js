const post = {
  id: 4,  // Remember to update this for each new post
  slug: "xgboost",
  title: "XGBoost For Financial Modelling",
  date: "July 19, 2025",
  preview: "Exploring some of the work I did at Tradeweb.",
  content: `

XGBoost is not a very simple. It stands for extreme gradient boosting and is a tree-based method that utilities
several parameters such as lambda and alpha to avoid overfitting. I won't try to describe XGBoost in its
entirety in this blog post, but just know it's an extremely popular machine learning technique that can perform
both classification and regression.

The key task I was given was to model the cost from mid of mortgage-backed securities (MBS) given certain characteristics. For context, mortgage-backed securities are
similar to bonds in some sense. For bonds you're lending money to some entity, and in return, they pay you back some interest every day/month, and at the end of the term
(usually anywhere between 1 year to 30 years), they'll give you back your principal (the original amount you loaned them). For MBS,
you're lending money to the bank and they're essentially paying you using people's mortgage payments.


Anyway, the question was given the mid price (market price), and assuming this MBS will trade at X, what is X minus mid price?
There were several factors to consider, such as trade volume, time of trade, or the coupon (interest) of the trade. While I can't go over
my exact results, I can share a bit about the process on how I tackled such a problem!

The first step was data cleaning.

\`\`\`python
df=df.dropna()
\`\`\`

I also visualised a lot of the data using seaborn. This would help me recognise where the majority of trades are clustered at. 


### Code Example
If you want to include code, use this format:


## Another Section

- You can use bullet points
- To make lists of items
- And organize information

### Final Thoughts

Wrap up your post with concluding thoughts or a call to action.
`
};

export default post;