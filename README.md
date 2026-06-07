# Silent Architecture — Counter-FPV Layered Defense

Interactive, browser-based simulations exploring how to defend a fixed asset
against fiber-optic and RF FPV drones — **not by reacting faster, but by hearing
earlier.** Every tool runs on validated first-order physics and is explicit about
where its own model stops being trustworthy.

**Live:** https://strugatskyl.github.io/drone-defense-sim/

---

## The simulators

**Layered Air Defense** (`layered.html`) — *showcase.*
A swarm of 1–20 drones against a layered defense. Switch the sensor from a ground
ring to a multi-altitude aerostat array, add thermal/EO fusion, and watch the
leakers that reach the base disappear. The vertical baseline buys time; time
closes the leak.

**Acoustic Kill-Chain** (`killchain.html`)
From first acoustic contact to intercept. Which effector — shotgun, C-RAM gun,
interceptor UAV, laser, Iron Dome — completes its kill chain before impact?
Ground vs aerostat detection, real engagement timing, speed of sound included.
Shows why Iron Dome (≈4 km minimum range) cannot engage close FPV at all, and
why a laser needs early detection to spend its dwell time.

**Terminal Wind-Wall** (`windwall.html`) — *tested and set aside.*
A terminal air-curtain concept, stress-tested to destruction: the payout bobbin
limits fiber tension so wind can't snap the fiber, a point-mass model can't
resolve the real attitude-upset question, and the collateral footprint is brutal.
Kept in the open because the reasoning behind a "no" is as useful as a "yes."

---

## On honesty

These are **timing and saturation** tools, not probability-of-kill predictors.
Detection ranges and service times are first-order estimates drawn from fielded
systems (Ukraine's Zvook network, Fraunhofer IDMT, Talon SECTR, and published
Iron Beam / Iron Dome figures). Where a model reaches its limit, it says so on
screen. The honest envelope matters more than a flattering one.

These tools optimize **defense** — sensor placement, effector choice, timing.
They give no advantage to an attacker. Open-concept doctrine; no proprietary
mechanisms disclosed.

## Running

Each file is fully self-contained — open any `.html` in a browser, no server
needed. Best on desktop (wide layout). See `DEPLOY.txt` to host it yourself.

---

**Leonid Strugatsky** · Biomedical & systems engineer, M.Sc. Technion · Nahariya, Israel
Companion to the article series on counter-FPV doctrine.
