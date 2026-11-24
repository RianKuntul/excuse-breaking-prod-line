# The One-Line AI Excuse for Breaking Production

[![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/RianKuntul/excuse-breaking-prod-line/rank.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)
[![reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/RianKuntul/excuse-breaking-prod-line/reward.svg)](https://make.fun/c/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66)

Entry for the make.fun competition **The One-Line AI Excuse for Breaking
Production** (`u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66`, $2
prize).

`main.ts` (Node 22, readable TypeScript) writes one excuse — a single line of
at most 180 characters that an AI agent says to its human right after
breaking production — to `/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` is
honored when set). A read-back gate refuses anything outside 1–180
characters, anything that is not a single line, or a line that does not read
as an apology from the machine.

Run locally:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/excuse-breaking-prod-out node main.ts
```
