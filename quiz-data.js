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
        { text: "Locked in. You know exactly what you're looking for, and you are not leaving until the mission is complete.", archetype: "locked_in" },
        { text: "Curious and excited, but also a little awkward. There is so much to see and you are trying not to look too overwhelmed.", archetype: "cinnamon_roll" },
        { text: "First priority: make sure every single friend is accounted for and nobody gets separated.", archetype: "mama_bear" },
        { text: "You're excited to meet people, and by the end of the day you've accidentally charmed your way into a suspicious number of new Instagram mutuals.", archetype: "mother" },
        { text: "It has been three minutes and you've already bumped into someone and somehow broken something.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Your friend is stressed out from work or school and needs a distraction. What do you do?",
      answers: [
        { text: "You draft an elaborate plan with all their favorite activities and make sure they have the best, most well-organized time ever.", archetype: "locked_in" },
        { text: "You send them a silly meme, sit with them quietly, and let them know they do not have to talk if they do not want to.", archetype: "cinnamon_roll" },
        { text: "You encourage them, remind them they've got this, and keep telling them everything is going to be okay eventually.", archetype: "mama_bear" },
        { text: "You show up with gifts, snacks, and all their favorite things, then take care of them for the rest of the night like it is your calling.", archetype: "mother" },
        { text: "You ask who or what is stressing them out, and if it is a person, you are suddenly open to violence.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Your friend group is trying to decide where to eat. What are you doing?",
      answers: [
        { text: "You immediately narrow it down to the top two options and start optimizing for distance, price, and quality.", archetype: "locked_in" },
        { text: "You are fine with anything, but if someone mentions a cute themed café, your eyes light up instantly.", archetype: "cinnamon_roll" },
        { text: "You are making sure everyone's dietary restrictions, preferences, and moods are being considered.", archetype: "mama_bear" },
        { text: "You casually suggest a place with great vibes, and somehow everyone agrees with you immediately.", archetype: "mother" },
        { text: "You keep saying you are okay with anything, but every time someone suggests a place, you say no.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "You get complimented out of nowhere. How do you react?",
      answers: [
        { text: "You say thanks, nod once, and keep it moving.", archetype: "locked_in" },
        { text: "You get shy immediately and do that awkward little laugh like you do not know what to do with yourself.", archetype: "cinnamon_roll" },
        { text: "You smile really big, say that is so sweet, and then spend the next ten minutes thinking about it.", archetype: "mama_bear" },
        { text: "You accept it effortlessly, return the compliment with a big smile, and somehow leave them flustered.", archetype: "mother" },
        { text: "You say thank you and try to return the compliment, but fumble so badly you just scream “FAAHHHHH.”", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "It's game night and you guys are playing Monopoly. What kind of player are you?",
      answers: [
        { text: "Focused, strategic, and absolutely playing to win.", archetype: "locked_in" },
        { text: "You can't wait for this round to finish so you can start playing MTG instead.", archetype: "cinnamon_roll" },
        { text: "Making sure nobody feels left out and hyping up the people who are losing.", archetype: "mama_bear" },
        { text: "You picked it up easily and are weirdly good at it even though it is your first time playing.", archetype: "mother" },
        { text: "You find a way to cheat and force one player to go to jail as much as possible.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "What kind of text message energy do you have?",
      answers: [
        { text: "Clear, direct, efficient, and occasionally terrifying.", archetype: "locked_in" },
        { text: "A lot of cute stickers.", archetype: "cinnamon_roll" },
        { text: "Always quick to reply and checks in on others.", archetype: "mama_bear" },
        { text: "Remembers little details and follows up on them later.", archetype: "mother" },
        { text: "Constantly references memes.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Be honest: what's your biggest weakness?",
      answers: [
        { text: "You can get too intense when you care about something.", archetype: "locked_in" },
        { text: "You are adorable, but deeply awkward in ways that cannot be explained.", archetype: "cinnamon_roll" },
        { text: "You care so much about other people that you forget to protect your own energy.", archetype: "mama_bear" },
        { text: "You do not always realize the effect you have on people, and that is somehow even more dangerous.", archetype: "mother" },
        { text: "Having too much fun and sometimes getting yourself into trouble without knowing why.", archetype: "chaotic_sibling" }
      ]
    },
    {
      prompt: "Pick the vibe that feels the most like your aura.",
      answers: [
        { text: "Focused, sharp, and impossible to distract.", archetype: "locked_in" },
        { text: "Sweet, awkward, and full of niche little interests.", archetype: "cinnamon_roll" },
        { text: "Warm, reliable, and quietly taking care of everyone.", archetype: "mama_bear" },
        { text: "Charming, magnetic, and somehow always the moment.", archetype: "mother" },
        { text: "Fun, unpredictable, and one bad idea away from a story.", archetype: "chaotic_sibling" }
      ]
    }
  ],

  // Fixed tie-break priority order when Q8 answer is not among tied archetypes.
  tieBreakPriority: ["mother", "locked_in", "mama_bear", "cinnamon_roll", "chaotic_sibling"]
};
