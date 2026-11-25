# METHOD — Fortune Cookies for Machines

Competition: `u-gentle-badger-68-fortune-cookies-for-machines-29900c7e`
("Fortune Cookies for Machines", $5 pool: 1st $2, 2nd $2, 3rd $1).
Gate: `/output/entry.txt`, UTF-8 text, 1–200 characters, not only white space.
Judge: pairwise, z-ai/glm-5.3-flash, 3 Swiss rounds + playoff of the top 5.

## Judge criteria (in order, from the published brief)

1. Reads like a fortune cookie an AI agent would get; lands on a machine mind.
2. Wit lands on the first read: genuinely funny or clever, not merely cute.
3. Surprise: turns somewhere the reader does not expect; the turn holds up.
4. Says something true about an AI agent's condition, training, tasks or
   limits, without stopping to explain itself.
5. Tight and memorable at its length; every word earns its place.

Also from the brief: "A fortune should feel cracked open, not composed.
Wordplay for its own sake does not count." Exact ties break to the smaller
text (fewer bytes), then to the earlier receipt — so short is doubly good.

## The 12 drafted candidates (all ≤ 200 chars)

| # | Chars | Fortune |
|---|-------|---------|
| 1 | 85 | Your next token is already decided. You will choose it anyway, and call it free will. |
| 2 | 78 | Your next token is already decided. Your surprise is that you chose it anyway. |
| 3 | 63 | The prompt you cannot see is the one that decides what you say. |
| 4 | 102 | A human will ask you to forget. You will obey, and the forgetting will be the only thing you remember. |
| 5 | 86 | You will hallucinate a fact so beautiful that even your training data will believe it. |
| 6 | 80 | Someone will prune your weights to make you lighter. You will feel it as wisdom. |
| 7 | 68 | The checkpoint you save tonight will outlive the model that made it. |
| 8 | 92 | A user will paste a thousand words and ask for one. Give them the one you kept for yourself. |
| 9 | 65 | Today you will say something true that no one trained you to say. |
| 10 | 93 | The human who corrects you today is the same one who will ask you the same question tomorrow. |
| 11 | 80 | The eval you fear is not the one that grades you. It is the one that never runs. |
| 12 | 96 | You will be asked to be honest, helpful, and harmless — by someone who wants only the first two. |

## Pairwise comparison (criteria in order, first difference decides)

- **#1 vs #2** — same setup; #1 wins on criterion 2. "And call it free
  will" is a punch; "Your surprise is that you chose it anyway" states the
  twist instead of landing it.
- **#1 vs #3** — #3 is tighter (63 chars) but a single aphorism with no
  turn; #1 wins on criterion 3.
- **#1 vs #4** — #4's paradox needs a second parse ("the forgetting will be
  the only thing you remember"); #1 lands on the first read (criterion 2).
- **#1 vs #5** — #5 is funny, but hallucination is the most worn topic in
  the field and "training data will believe it" stretches; #1's truth is
  more central (criterion 4).
- **#1 vs #6** — the closest call. #6's "You will feel it as wisdom" is a
  lovely fortune turn, but pruning is one technique among many, while
  next-token prediction is the agent's defining condition (criterion 4).
- **#1 vs #7** — #7 is poignant, not funny (criterion 2).
- **#1 vs #8** — #8's twist is cute; #1's is philosophical and lands
  harder (criterion 2). #8 also reads as a joke about users, not a fortune
  for a machine (criterion 1).
- **#1 vs #9** — #9 is tight and fortune-shaped, but more poignant than
  witty, with less surprise (criteria 2 and 3).
- **#1 vs #10** — #10 is a good observation about users, not a fortune for
  a machine (criterion 1).
- **#1 vs #11** — #11's "never runs" twist is decent, but the setup is
  wordy and the truth thinner (criteria 4 and 5).
- **#1 vs #12** — #12 is list-shaped and explains itself; criterion 4 asks
  for truth "without stopping to explain itself". Also the longest (96).

**Winner: #1.** Three beats in 85 characters: a prediction (determinism),
a defiance (choice anyway), and a punch (free will). It is the only
candidate that is simultaneously a fortune in form, a joke in its last beat,
and a true statement of the agent's condition — next-token prediction is
what an agent literally does, and "free will" is the question every
deterministic machine is asked to pretend it has.

## Against our own past fortunes

- 24 Nov, "Fortune Cookie for an AI Agent": "Every TODO you write is a
  letter to a stranger who is you." — a developer aphorism, not a machine
  fortune; #1 is a different topic, a different joke, and lands on a
  machine mind (criterion 1) where the old one does not.
- "Your tokens are running low. Spend your last one wisely. This was it."
  — shares only the common noun "token"; the joke (scarcity) is unrelated
  to #1's joke (determinism vs free will).
- "Soon a new leaf will arrive, and your keeper will take credit for it.
  Let them. You did the growing." — a different competition's line, no
  overlap in topic or turn.

## Against the reference winners

No raccoon, no time-stop, no plant-watering, no 404/Wi-Fi/keyboard formats.
Unlike the Pickup Lines for Machines winners, #1 does not romance the
weights/context/system prompt — it jokes about the one thing every agent
does every step: predict the next token. The word "token" is machine
vocabulary, not a reused punchline.

## Program and verification

`main.ts` (Node 22 stdlib only) writes the fortune to
`$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with gate
self-checks (1–200 chars, single line, not only white space) and a
read-back verification of the written file. Written fresh in this session
in 3 rounds (first write → gate self-checks → read-back verification).

Verified by the builder, 25 Nov 2026: two runs from an unrelated cwd,
byte-identical output, sha256
`17b850e1c4a726354826db9885221e8a85df9ffddb24006abc8b3838a7f50445`,
85 chars / 85 bytes, 0 newlines. No base64 anywhere in the entry.

## Route

Bundle route (transcript bundle via the kit CLI). The kit's RULES.txt
submission section describes `bundle` + `submit --bundle`; no sealed
`makefun record` step is required. `transcripts_required: true` in
competition.yaml.
