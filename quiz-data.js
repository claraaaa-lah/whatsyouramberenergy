// Quiz content. Letter → archetype mapping is consistent across all 8 questions:
//   A → locked_in, B → cinnamon_roll, C → mama_bear, D → mother, E → chaotic_sibling
window.QUIZ_DATA = {
  title: "Which Amber Glenn's energy are you?",
  intro:
    "So Amber has been flooding my feed lately, and I thought it would be cute to build this because her personality is really adorable. Answer a few questions and find out which Amber Glenn energy you give!",

  archetypes: {
    locked_in: {
      name: "Locked In Competition Amber",
      emoji: "🎯",
      description:
        "The music has started, your face card has declined all unnecessary emotions, and suddenly everyone around you realizes this is not a game anymore. You are here to execute, hit your marks, and maybe scare people a little just by being composed.",
      traits: [
        "Scary focused.",
        "Precision over nonsense.",
        "Competitive spirit.",
        "Zeroed in.",
        "Not here to play."
      ],
      closer: "You did not come to participate. You came to deliver."
    },
    cinnamon_roll: {
      name: "Cinnamon Roll Amber",
      emoji: "🥐",
      description:
        "You are cute, a little awkward, probably have niche lore ready at all times, and could absolutely derail a conversation by bringing up Pokémon or MTG in the most endearing way possible. People meet you and immediately feel the need to protect you, even though you are also lowkey hilarious.",
      traits: [
        "Certified cutie.",
        "Nerd-coded.",
        "Endearingly awkward.",
        "Soft-hearted.",
        "Secretly hilarious."
      ],
      closer:
        "You are the kind of person who says one oddly specific thing and everyone gets more attached to you."
    },
    mama_bear: {
      name: "Mama Bear Amber",
      emoji: "🧸",
      description:
        "You are the one checking if everyone got home, hyping people up when they doubt themselves, and mentally keeping track of the emotional weather in every room. You love hard, protect harder, and will absolutely intervene if one of your people is not being treated correctly.",
      traits: [
        "Protective as hell.",
        "Encouraging.",
        "Emotionally observant.",
        "Proud of your people.",
        "Will stand up for others fast."
      ],
      closer: "You are the group chat's emotional infrastructure."
    },
    mother: {
      name: "Mother Amber",
      emoji: "💅",
      description:
        "You are magnetic, devastatingly charming, and somehow able to leave people flustered by doing the smallest thing with a little too much grace. You are not trying to be the moment every time, but unfortunately for everyone else, you usually are.",
      traits: [
        "Effortlessly charismatic.",
        "Leaves people flustered.",
        "Main-character aura.",
        "Elegant menace.",
        "Icon behavior."
      ],
      closer: "You did not ask to be adored. It just keeps happening."
    },
    chaotic_sibling: {
      name: "Chaotic Sibling Energy Amber",
      emoji: "🎭",
      description:
        "You are fun, unserious, slightly dangerous to the stability of any plan, and somehow always one sentence away from making the situation worse in a way that is deeply funny. You do not wake up intending to cause trouble, but trouble does seem to recognize you on sight.",
      traits: [
        "Menace energy.",
        "Meme-brained.",
        "Unpredictable.",
        "Accident-prone icon.",
        "Trouble, but fun."
      ],
      closer: "You are the reason the story got good."
    }
  },

  questions: [
    {
      prompt: "You're walking into a Pokémon convention with your friends. What's on your mind?",
      answers: [
        { text: "You know exactly what you're here for. Goes striaght to trading cards.", archetype: "locked_in" },
        { text: "Excited and a little awkward. You're trying not to get too overwhelmed.", archetype: "cinnamon_roll" },
        { text: "Making sure nobody gets separated before anything else.", archetype: "mama_bear" },
        { text: "By the end of the day you've somehow collected a suspicious number of new Instagram mutuals.", archetype: "mother" },
        { text: "It's been three minutes and you've already broken something.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Your friend is stressed out from work or school and needs a distraction. What do you do?",
      answers: [
        { text: "You plan a full day of their favorite activities and make sure all stress are gone by tonight.", archetype: "locked_in" },
        { text: "You send a silly meme, sit with them quietly, and let them not talk if they don't want to.", archetype: "cinnamon_roll" },
        { text: "You remind them they've got this and keep the encouragement coming until they believe it.", archetype: "mama_bear" },
        { text: "You show up with snacks, gifts, and their favorite things like it's your divine calling.", archetype: "mother" },
        { text: "You ask who stressed them out, and if it's a person, you're ready to start throwing hands.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Your friend group is trying to decide where to eat. What are you doing?",
      answers: [
        { text: "You narrow it down to two options and start optimizing for distance, price, and quality.", archetype: "locked_in" },
        { text: "You're fine with anything — until someone mentions a themed café and your eyes light up.", archetype: "cinnamon_roll" },
        { text: "You're considering everyone's dietary restrictions while keeping within budget.", archetype: "mama_bear" },
        { text: "You casually suggest a place and somehow everyone agrees immediately.", archetype: "mother" },
        { text: "You say you're fine with anything, then says 'no' to every suggestion.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "You get complimented out of nowhere. How do you react?",
      answers: [
        { text: "You say thanks, nod once, and keep it moving.", archetype: "locked_in" },
        { text: "You get shy immediately and do that awkward little laugh.", archetype: "cinnamon_roll" },
        { text: "You smile really big and think about it for the next ten minutes.", archetype: "mama_bear" },
        { text: "You accept it effortlessly, return it with a smile, and somehow leave them flustered.", archetype: "mother" },
        { text: 'You try to return the compliment but fumble so badly you just scream "FFAAAHHHH".', archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "It's game night and you guys are playing Monopoly. What kind of player are you?",
      answers: [
        { text: "Focused, strategic, and absolutely playing to win.", archetype: "locked_in" },
        { text: "Waiting for this to end so you can play MTG instead.", archetype: "cinnamon_roll" },
        { text: "Hyping up whoever's losing and making sure nobody feels left out.", archetype: "mama_bear" },
        { text: "Weirdly good at it even though it's your first time.", archetype: "mother" },
        { text: "Your mission is to make a player go to jail as much as possible.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "What kind of text message energy do you have?",
      answers: [
        { text: "Clear, direct, and occasionally terrifying.", archetype: "locked_in" },
        { text: "A lot of cute stickers.", archetype: "cinnamon_roll" },
        { text: "Always quick to reply and checks in on people.", archetype: "mama_bear" },
        { text: "Remembers little details and follows up on them later.", archetype: "mother" },
        { text: "Ninety percent meme references.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Be honest: what's your biggest weakness?",
      answers: [
        { text: "You get too intense when you care about something.", archetype: "locked_in" },
        { text: "Adorable but deeply, inexplicably awkward.", archetype: "cinnamon_roll" },
        { text: "You care so much about others that you forget to protect your own energy.", archetype: "mama_bear" },
        { text: "You don't always realize the effect you have on people, which makes it worse.", archetype: "mother" },
        { text: "You have too much fun and keep ending up in trouble you can't explain.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Pick the vibe that feels the most like your aura.",
      answers: [
        { text: "Focused, sharp, impossible to distract.", archetype: "locked_in" },
        { text: "Sweet, awkward, full of niche little interests.", archetype: "cinnamon_roll" },
        { text: "Warm, reliable, quietly holding everyone together.", archetype: "mama_bear" },
        { text: "Charming, magnetic, somehow always the moment.", archetype: "mother" },
        { text: "Fun, unpredictable, one bad idea away from a great story.", archetype: "chaotic_sibling" }
      ]
    }
  ],

  // Fixed tie-break priority order when Q8 answer is not among tied archetypes.
  tieBreakPriority: ["mother", "locked_in", "mama_bear", "cinnamon_roll", "chaotic_sibling"]
};