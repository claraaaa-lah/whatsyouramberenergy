# Amber Glenn Quiz Implementation Brief

Build a static personality quiz website inspired by the vibe and flow of `what's my boba` / `whatbobaareyou` style GitHub Pages quiz sites, but themed around Amber Glenn fandom energy.

## Project summary

Create a lightweight frontend-only website titled **Which Amber Glenn's Energy Are You?** using JavaScript and JSON for quiz data and scoring logic. The site should feel playful, cute, meme-aware, screenshot-friendly, and easy to share. Amber Glenn's publicly visible nerdy interests in Pokémon and Magic: The Gathering are part of the quiz copy and should remain intact.

## Reference

Use **what's my boba / whatbobaareyou** as a structural and tonal reference for:
- one-question-at-a-time quiz flow,
- playful personality-archetype results,
- lightweight static-site implementation,
- screenshot-friendly results reveal.

This should not be a clone. It should feel like an Amber Glenn fan-made personality quiz with its own voice and styling.

## Tech requirements

- Frontend-only static site.
- Use **JavaScript** for quiz state and scoring.
- Store quiz content in **JSON** or a JS object shaped like JSON.
- No backend required.
- Must be easy to deploy to GitHub Pages or any static host. Vite supports static deployment and GitHub Pages with the proper base-path configuration if a framework build is used.

## Required features

Implement the following:
- Progress bar.
- One-question-at-a-time UI.
- Restart button.
- Result screen with final archetype reveal.
- Screenshot-friendly result card.
- “Share your result” action.
- Mobile-friendly responsive layout.

## Product tone

The overall vibe should be:
- playful,
- meme-aware,
- affectionate,
- fandom-coded,
- slightly chaotic,
- cute but polished.

The result archetype called **Mother Amber** should use the Gen Z / fandom meaning of “mother”: charismatic, magnetic, iconic, charming, feminine, and admired, rather than literal maternal energy.

## Quiz title

**Which Amber Glenn's energy are you?**

## Intro copy

**So Amber has been flooding my feed lately, and I thought it would be cute to build this because her personality is really adorable. Answer a few questions and find out which Amber Glenn energy you give!**

## Archetypes

There are 5 result archetypes:

1. **Locked In Competition Amber**
2. **Cinnamon Roll Amber**
3. **Mama Bear Amber**
4. **Mother Amber**
5. **Chaotic Sibling Energy Amber**

## Result copy

### Locked In Competition Amber

You are **Locked In Competition Amber**. The music has started, your face card has declined all unnecessary emotions, and suddenly everyone around you realizes this is not a game anymore. You are here to execute, hit your marks, and maybe scare people a little just by being composed.

**Traits**
- Scary focused.
- Precision over nonsense.
- Competitive spirit.
- Zeroed in.
- Not here to play.

**Optional closer**
- You did not come to participate. You came to deliver.

### Cinnamon Roll Amber

You are **Cinnamon Roll Amber**. You are cute, a little awkward, probably have niche lore ready at all times, and could absolutely derail a conversation by bringing up Pokémon or MTG in the most endearing way possible. People meet you and immediately feel the need to protect you, even though you are also lowkey hilarious.

**Traits**
- Certified cutie.
- Nerd-coded.
- Endearingly awkward.
- Soft-hearted.
- Secretly hilarious.

**Optional closer**
- You are the kind of person who says one oddly specific thing and everyone gets more attached to you.

### Mama Bear Amber

You are **Mama Bear Amber**. You are the one checking if everyone got home, hyping people up when they doubt themselves, and mentally keeping track of the emotional weather in every room. You love hard, protect harder, and will absolutely intervene if one of your people is not being treated correctly.

**Traits**
- Protective as hell.
- Encouraging.
- Emotionally observant.
- Proud of your people.
- Will stand up for others fast.

**Optional closer**
- You are the group chat’s emotional infrastructure.

### Mother Amber

You are **Mother Amber**. You are magnetic, devastatingly charming, and somehow able to leave people flustered by doing the smallest thing with a little too much grace. You are not trying to be the moment every time, but unfortunately for everyone else, you usually are.

**Traits**
- Effortlessly charismatic.
- Leaves people flustered.
- Main-character aura.
- Elegant menace.
- Icon behavior.

**Optional closer**
- You did not ask to be adored. It just keeps happening.

### Chaotic Sibling Energy Amber

You are **Chaotic Sibling Energy Amber**. You are fun, unserious, slightly dangerous to the stability of any plan, and somehow always one sentence away from making the situation worse in a way that is deeply funny. You do not wake up intending to cause trouble, but trouble does seem to recognize you on sight.

**Traits**
- Menace energy.
- Meme-brained.
- Unpredictable.
- Accident-prone icon.
- Trouble, but fun.

**Optional closer**
- You are the reason the story got good.

## Finalized quiz questions

Use the following copy exactly as written.

### 1. You’re walking into a Pokémon convention with your friends. What’s on your mind?
- A. Locked in. You know exactly what you’re looking for, and you are not leaving until the mission is complete.
- B. Curious and excited, but also a little awkward. There is so much to see and you are trying not to look too overwhelmed.
- C. First priority: make sure every single friend is accounted for and nobody gets separated.
- D. You’re excited to meet people, and by the end of the day you’ve accidentally charmed your way into a suspicious number of new Instagram mutuals.
- E. It has been three minutes and you’ve already bumped into someone and somehow broken something.

### 2. Your friend is stressed out from work or school and needs a distraction. What do you do?
- A. You draft an elaborate plan with all their favorite activities and make sure they have the best, most well-organized time ever.
- B. You send them a silly meme, sit with them quietly, and let them know they do not have to talk if they do not want to.
- C. You encourage them, remind them they’ve got this, and keep telling them everything is going to be okay eventually.
- D. You show up with gifts, snacks, and all their favorite things, then take care of them for the rest of the night like it is your calling.
- E. You ask who or what is stressing them out, and if it is a person, you are suddenly open to violence.

### 3. Your friend group is trying to decide where to eat. What are you doing?
- A. You immediately narrow it down to the top two options and start optimizing for distance, price, and quality.
- B. You are fine with anything, but if someone mentions a cute themed café, your eyes light up instantly.
- C. You are making sure everyone’s dietary restrictions, preferences, and moods are being considered.
- D. You casually suggest a place with great vibes, and somehow everyone agrees with you immediately.
- E. You keep saying you are okay with anything, but every time someone suggests a place, you say no.

### 4. You get complimented out of nowhere. How do you react?
- A. You say thanks, nod once, and keep it moving.
- B. You get shy immediately and do that awkward little laugh like you do not know what to do with yourself.
- C. You smile really big, say that is so sweet, and then spend the next ten minutes thinking about it.
- D. You accept it effortlessly, return the compliment with a big smile, and somehow leave them flustered.
- E. You say thank you and try to return the compliment, but fumble so badly you just scream “FAAHHHHH.”

### 5. It’s game night and you guys are playing Monopoly. What kind of player are you?
- A. Focused, strategic, and absolutely playing to win.
- B. You can’t wait for this round to finish so you can start playing MTG instead.
- C. Making sure nobody feels left out and hyping up the people who are losing.
- D. You picked it up easily and are weirdly good at it even though it is your first time playing.
- E. You find a way to cheat and force one player to go to jail as much as possible.

### 6. What kind of text message energy do you have?
- A. Clear, direct, efficient, and occasionally terrifying.
- B. A lot of cute stickers.
- C. Always quick to reply and checks in on others.
- D. Remembers little details and follows up on them later.
- E. Constantly references memes.

### 7. Be honest: what’s your biggest weakness?
- A. You can get too intense when you care about something.
- B. You are adorable, but deeply awkward in ways that cannot be explained.
- C. You care so much about other people that you forget to protect your own energy.
- D. You do not always realize the effect you have on people, and that is somehow even more dangerous.
- E. Having too much fun and sometimes getting yourself into trouble without knowing why.

### 8. Pick the vibe that feels the most like your aura.
- A. Focused, sharp, and impossible to distract.
- B. Sweet, awkward, and full of niche little interests.
- C. Warm, reliable, and quietly taking care of everyone.
- D. Charming, magnetic, and somehow always the moment.
- E. Fun, unpredictable, and one bad idea away from a story.

## Archetype mapping

Map each answer letter consistently to the same archetype across every question:

- **A** → Locked In Competition Amber
- **B** → Cinnamon Roll Amber
- **C** → Mama Bear Amber
- **D** → Mother Amber
- **E** → Chaotic Sibling Energy Amber

## Suggested JSON shape

Use a JSON or JS data structure similar to the following:

```json
{
  "title": "Which Amber Glenn's energy are you?",
  "intro": "So Amber has been flooding my feed lately, and I thought it would be cute to build this because her personality is just so kyoot. Answer a few questions and find out which Amber Glenn energy you are.",
  "archetypes": {
    "locked_in": {
      "name": "Locked In Competition Amber",
      "traits": ["Serious", "Locked in", "Competitive", "Precise", "Driven", "Intense when it counts"]
    },
    "cinnamon_roll": {
      "name": "Cinnamon Roll Amber",
      "traits": ["Cute", "Nerdy", "MTG/Pokémon coded", "Clumsy in an endearing way", "Soft-hearted", "Quietly hilarious"]
    },
    "mama_bear": {
      "name": "Mama Bear Amber",
      "traits": ["Protective", "Encouraging", "Supportive", "Happy for others", "Emotionally strong", "Fiercely loyal"]
    },
    "mother": {
      "name": "Mother Amber",
      "traits": ["Charismatic", "Magnetic", "Femme fatale energy", "Confident", "Glamorous", "Main-character coded"]
    },
    "chaotic_sibling": {
      "name": "Chaotic Sibling Energy Amber",
      "traits": ["Causes trouble for fun", "Teasing", "Fun to be with", "Unpredictable", "Mischievous", "Lovably annoying"]
    }
  },
  "questions": [
    {
      "prompt": "You’re walking into a Pokémon convention with your friends. What’s on your mind?",
      "answers": [
        { "text": "Locked in. You know exactly what you’re looking for, and you are not leaving until the mission is complete.", "archetype": "locked_in" },
        { "text": "Curious and excited, but also a little awkward. There is so much to see and you are trying not to look too overwhelmed.", "archetype": "cinnamon_roll" },
        { "text": "First priority: make sure every single friend is accounted for and nobody gets separated.", "archetype": "mama_bear" },
        { "text": "You’re excited to meet people, and by the end of the day you’ve accidentally charmed your way into a suspicious number of new Instagram mutuals.", "archetype": "mother" },
        { "text": "It has been three minutes and you’ve already bumped into someone and somehow broken something.", "archetype": "chaotic_sibling" }
      ]
    }
  ]
}
```

Repeat the same shape for all 8 questions.

## UX requirements

### Quiz flow
- Landing screen with title, intro copy, and start button.
- One question visible at a time.
- Clicking an answer advances to the next question.
- Show visible progress state, such as `Question 3 of 8` plus a progress bar.
- Do not allow going forward without selecting an answer.
- At the end, compute the highest scoring archetype and reveal the result card.

### Result screen
The result screen should include:
- Result title.
- Short result description.
- Bulleted traits.
- Optional short line like “you are this Amber energy.”
- Restart button.
- “Share your result” button.
- Screenshot-friendly result card container.

### Share behavior
Implement at least one of the following:
- Use the Web Share API when available.
- Fallback to copying a share text string to clipboard.

Suggested share copy format:

```text
I got Mother Amber on Which Amber Glenn's energy are you? 💫
```

### Screenshot-friendly card
The final result card should:
- be visually self-contained,
- look good on mobile,
- include the result title and traits,
- avoid clutter,
- have enough spacing and contrast to screenshot cleanly,
- feel like something a fan would post to stories or send in group chats.

If useful, the result card can have:
- a decorative title,
- subtle sparkles/stars,
- soft gradients,
- a small footer line with the quiz title.

## UI/style direction

Suggested visual direction:
- soft icy palette, silver, white, cool blue, maybe blush accent,
- cute but clean type hierarchy,
- slightly glam but not overdesigned,
- fandom energy over corporate polish,
- mobile-first layout,
- polished enough to feel intentionally shareable.

## Tie-break logic

Use the following tie-break system:

1. Calculate the highest score from **Q1–Q8**.
2. If there is a single winner, return that archetype.
3. If there is a tie, use the **Q8 answer** to decide between the tied archetypes.
4. If the **Q8 archetype is not among the tied archetypes**, use the following fixed priority order:
   1. Mother Amber
   2. Locked In Competition Amber
   3. Mama Bear Amber
   4. Cinnamon Roll Amber
   5. Chaotic Sibling Energy Amber

This keeps the result deterministic while still giving Q8 tie-break priority when possible. Ties are common enough in personality-style quizzes that explicit tie handling is recommended rather than relying on accidental ordering.

## Implementation notes

- Keep state simple.
- Use a score object keyed by archetype.
- Increment the chosen archetype on answer click.
- Score all 8 questions normally.
- After the final answer, determine the max score and collect all tied archetypes.
- If one archetype wins, show it.
- If multiple archetypes tie, check whether the Q8 answer belongs to the tied set.
- If yes, use the Q8 archetype as the final winner.
- If not, use the fixed priority order above.
- Keep the code easy to read and easy to edit later.

## Deliverable

Deliver a working static site implementation with:
- HTML/CSS/JavaScript or a lightweight JS framework,
- data-driven quiz content from JSON or JS object data,
- responsive design,
- result sharing,
- restart flow,
- polished final result card.
