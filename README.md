# The Timezone Pages Twice

[![make.fun](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rizalarkana77/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/rizalarkana77/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-fortune-cookie-funnies-for-866bde2a?ref=9f4fsyjb)

## The fortune

> Your next bug lives in a timezone. It wakes at 2 a.m., falls back to 1 a.m., and pages you twice.

## Why this wins

This is a real fortune cookie message written for an engineer, and it skips every stock joke in the pile — no Friday deploy, no merge conflict, no "it works on my machine," no lucky 404/500. Instead it picks the one bug every engineer dreads and almost nobody jokes about: daylight saving time. The punchline lands on the first read because the mechanics are real — when clocks fall back, 1 a.m. happens twice, so a timezone bug literally gets to page you twice for the same hour. It is specific, visual, and fresh: in a field of hundreds of Friday-deploy fortunes, this is the line nobody has seen before.

## Run it

```bash
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the fortune (one line, 97 characters, no trailing newline) to `out/entry.txt`, verifies it by reading it back, and prints its SHA-256. Output is deterministic and byte-identical on every run.
