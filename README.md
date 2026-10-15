# Unit-test-demo-Devops

## Branching strategy

This project uses GitHub Flow.

- Main is always working and is protected; no direct commits.

- Each task has an issue, and work happens on a branch named `feature/<issue-number>-<short-name>`.

- Changes are merged into `main` only via pull request, and each PR links its issue.

- GitHub Actions runs the tests on every PR, and branches are kept after merging.

## See RETROSPECTIVE.md for the sprint review