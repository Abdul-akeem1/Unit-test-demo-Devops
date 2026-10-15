## Sprint Retrospective

## Project:
Unit Test Demo (DevOps CA) Sprint: Week 1 (1-week iteration) Stack: JavaScript, Jest, GitHub Actions

The goal was to show unit testing and good Git practice on a small project. I built a simple ShoppingCart class, generated unit tests for it, refined them into a proper test suite, and added a GitHub Actions workflow that runs the tests and a security audit on every pull request.

Each piece of work had its own issue, its own feature/<issue-number>-<name> branch, and its own pull request that closed the issue. The sprint board covered issues #1 to #4.

## What went well
The workflow clicked once I started it. Issue, branch, commit, PR, merge, and the issue closing itself because of Closes #n. By the third PR I got used to it, and the commit history now shows the work in separate steps instead of one big push.

The board kept me organised. Moving issues from Todo to In Progress to Done made it obvious what I was working on and what was left.

Generating the tests saved time. I used Copilot to generate the first version of the tests, and it covered the main behaviour straight away (default quantity, validation errors, removing items, the total, an empty cart).

## What didn't go so well
The generated tests weren't perfect. The tool guessed the wrong import path (./ShoppingCart instead of ../src/ShoppingCart), so the whole suite failed to run at first. Several tests also checked cart.items directly, which ties the tests to how the class stores its data. If I changed the internals, the tests would break even though the cart still worked. I changed those to check behaviour through getTotal().

## What I learned
Linking issues, branches, commits and PRs together makes the whole project traceable.

Small branches and PRs are easier to manage than big ones. When something went wrong, it was easy to see which change caused it.