export type ArticleParagraph = {
  type: 'p' | 'pullquote' | 'subhead';
  text: string;
};

export type Article = {
  slug: string;
  category: string;
  title: string;
  dek: string;
  byline: string;
  date: string;
  readTime: string;
  heroImage: string;
  heroAlt: string;
  body: ArticleParagraph[];
  tags: string[];
};

export const mainArticle: Article = {
  slug: 'drake-kick-stream-dating-show',
  category: 'Culture',
  title: 'Drake Turns Kick Stream Into a 20-v-1 Dating Show, Warns Rap Rivals His \u2018Pen Isn\u2019t Dry\u2019',
  dek: 'Inside the rapper\u2019s wild ride of a livestream, featuring Lena the Plug, an Herm\u00e8s giveaway, and apparent subliminals about rap beef.',
  byline: 'By Jeff Ihaza',
  date: 'August 9, 2026',
  readTime: '6 min read',
  heroImage: '/V1.jpg',
  heroAlt: 'Drake smiling in a light-colored jacket',
  tags: ['Drake', 'Kick', 'Stake', 'Rap Beef', 'Livestream'],
  body: [
    {
      type: 'p',
      text: 'On Saturday, Drake continued his ongoing forays into the world of content creators, hosting a stream on Kick, which is affiliated with Stake, the crypto gambling company Drake is partnered with, which saw the rapper, fresh off the release of three new albums, flirting with a goth streamer, gifting out Birkins, and sending not so subtle warnings to the rest of the rap game, noting that his \u201Cpen isn\u2019t dry.\u201D',
    },
    {
      type: 'p',
      text: 'The roughly three-hour broadcast marked the ninth anniversary of Stake, the online crypto casino that has sponsored Drake\u2019s livestreams for years. The company announced the stream with an Instagram post advertising more than $1 million in cash and prize giveaways, including a $50,000 grand prize for one viewer. During the actual stream, things moved quickly beyond gambling, turning into something closer to a chaotic Drake variety show. Drake also used the opening portion of the stream to reflect on his recent releases, patting himself on the back a little for dropping three projects at once. He also has a warning for anyone considering taking more shots in his direction.',
    },
    {
      type: 'pullquote',
      text: 'These guys are dropping albums, like hello and goodbye, and careful with that reply \u2019cause the pen isn\u2019t dry.',
    },
    {
      type: 'p',
      text: 'Drake has been, of late, repping his Canadian upbringing pretty heavily, so it isn\u2019t much of a surprise that he was joined by NELK co-founder Kyle Forgeard, who presented Drake with an SNL-style take on the popular 20-v-1 dating-show format. The women cycled through conversations with the rapper, who eventually had to choose one to \u201Cwife,\u201D another to hook up with and a third to make his best friend. The proceedings included a contestant asking Drake to demonstrate his favorite sexual position and an appearance from adult-content creator Lily Phillips, who went viral in late 2024 after a documentary chronicled her having sex with 101 men in a single day. Phillips announced that she was \u201Crebranding as Drake\u2019s wife.\u201D',
    },
    {
      type: 'subhead',
      text: 'The Final Three',
    },
    {
      type: 'p',
      text: 'The final three were influencer Jordyn Lucas, adult-film star Lena the Plug, and goth streamer Pinkchyu. Drake placed Lucas in the best-friend category and gave her $25,000 and a Birkin. Lena, who briefly removed her wedding ring after hugging Drake, received $25,000 and an all-expenses-paid trip reportedly to New Zealand. In something of a callback to his September 2025 appearance on Bobbi Althoff\u2019s podcast Not This Again, where he said his destiny was to end up with a \u201Cgoth baddie,\u201D Drake leaned into his self-described type by giving Pinkchyu the \u201Cwife\u201D designation. This after she had him bark on command.',
    },
    {
      type: 'subhead',
      text: 'Rap Beef Speculation Heats Up',
    },
    {
      type: 'p',
      text: 'The night also fueled more rap beef speculation. Drake floated the idea of holding Stake\u2019s 10th-anniversary broadcast next year on a yacht, then quickly added that he hates boats. Given rumors that he and Lil Yachty, better known as Boat, have fallen out, Akademiks, naturally livestreaming Drake\u2019s livestream, wondered whether the remark was a subliminal shot. Drake denied it.',
    },
    {
      type: 'p',
      text: 'In another moment already being heavily clipped online, Drake joked that the \u201CRoc Nation subpoenas\u201D were \u201Cabout to be cleared.\u201D The remark appeared to refer to a recent What\u2019s The Dirt video speculating that Roc Nation had played some role in the federal class action targeting Drake and Stake. Nine days earlier, a Virginia judge had ordered the plaintiffs\u2019 claims against Stake into private arbitration and paused the remainder of the case, including the claims naming Drake.',
    },
    {
      type: 'p',
      text: 'The stream was the latest example of the new norms of online video, where viral clips can quickly come to flood the feed thanks in no small part to companies like Kick\u2019s well-reported army of clippers, dutifully turning each newsworthy moment into viral fodder.',
    },
    {
      type: 'p',
      text: 'It ultimately worked like a compressed version of Drake\u2019s current internet strategy\u2014especially the giving away huge sums of money part. Yet another signal that Drake sees real value in this emerging media ecosystem. On \u201CFirst Person Shooter,\u201D from 2023\u2019s For All the Dogs, he famously rapped, \u201CMy youngins richer than you rappers and they all stream,\u201D and has since enmeshed himself even more deeply in the world of streamers and content creators. During this year\u2019s Streamer University, hosted by Kai Cenat, Drake delivered a prerecorded address to attendees and left care packages in their rooms stocked with cologne, Nocta clothing, Pok\u00e9mon cards and other gifts.',
    },
    {
      type: 'pullquote',
      text: 'I hope you learn something. I hope you\u2019re able to teach each other things.',
    },
  ],
};

export type TrendingStory = {
  id: string;
  category: string;
  title: string;
  image: string;
};

export const trendingStories: TrendingStory[] = [
  {
    id: 't1',
    category: 'Music',
    title: 'ZZ Top Drummer Frank Beard Facing Health Issues Following Show Cancellation',
    image:
      'https://images.pexels.com/photos/2257475/pexels-photo-2257475.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 't2',
    category: 'Legal',
    title: 'Biggie\u2019s Manager Wins Battle Against Faith Evans, Gains Partial Control Over Rapper\u2019s Catalog Cash',
    image:
      'https://images.pexels.com/photos/7972037/pexels-photo-7972037.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 't3',
    category: 'Politics',
    title: 'Trump Hid in an Airport Catering Cart Amid Iranian Threat: Report',
    image:
      'https://images.pexels.com/photos/11213185/pexels-photo-11213185.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
  {
    id: 't4',
    category: 'Music',
    title: 'Taylor Swift and Bad Bunny Dealt With Trump Quietly. It\u2019s a Smart Move',
    image:
      'https://images.pexels.com/photos/19437718/pexels-photo-19437718.jpeg?auto=compress&cs=tinysrgb&h=400&w=600',
  },
];

export type EditorPick = {
  id: string;
  kicker: string;
  title: string;
  description: string;
  image: string;
};

export const editorPicks: EditorPick[] = [
  {
    id: 'e1',
    kicker: 'List',
    title: 'The 250 Greatest Albums of the 21st Century So Far',
    description:
      'From bass-heavy breakthroughs to drill dominance, we ranked every record that defined the century.',
    image:
      'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    id: 'e2',
    kicker: 'List',
    title: 'The 100 Best TV Episodes of All Time',
    description: 'The episodes that stopped the conversation. Ranked, debated, and final.',
    image:
      'https://images.pexels.com/photos/12832570/pexels-photo-12832570.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    id: 'e3',
    kicker: 'List',
    title: 'The 500 Greatest Albums of All Time',
    description: 'The definitive canon. No re-releases, no nostalgia picks, no apologies.',
    image:
      'https://images.pexels.com/photos/9327162/pexels-photo-9327162.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
  {
    id: 'e4',
    kicker: 'List',
    title: '100 Best Movies of the 21st Century',
    description: 'From blockbuster epics to underground cult classics.',
    image:
      'https://images.pexels.com/photos/6919947/pexels-photo-6919947.jpeg?auto=compress&cs=tinysrgb&h=500&w=700',
  },
];

export const tickerItems: string[] = [
  'BREAKING: Drake drops three albums, hosts 20-v-1 dating show on Kick',
  'Virginia judge pauses federal class action against Stake',
  'Lena the Plug briefly removes wedding ring on stream',
  'Pinkchyu crowned \u201Cwife\u201D after making Drake bark on command',
  'Roc Nation subpoenas \u201Cabout to be cleared,\u201D Drake jokes',
  'Streamer University care packages included Pok\u00e9mon cards and Nocta gear',
  'Lil Yachty subliminal denied by Drake: \u201CI hate boats\u201D',
];
