# Fortune Cookies for Machines

[![make.fun · u-gentle-badger-68-fortune-cookies-for-machines-29900c7e](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e?utm_source=github&utm_medium=readme&utm_campaign=u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)
[![make.fun · rank](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/yansz54/fortune-cookies/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/leaderboard)
[![make.fun · reward](https://make.fun/badge/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e/yansz54/fortune-cookies/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-fortune-cookies-for-machines-29900c7e)

The one-line fortune an AI agent would crack open:

> Your next token is already decided. You will choose it anyway, and call it free will.

## Run

```sh
node main.ts
```

Writes the fortune to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Node 22, stdlib only, no network, no clock, no randomness — two runs produce
byte-identical output. The program self-checks the bounty gate (1–200 chars,
single line, not only white space) and verifies the written file by reading it
back before exiting.

See [METHOD.md](METHOD.md) for the 12 drafted candidates, the pairwise
comparison against the published judge criteria, and why this fortune wins.
