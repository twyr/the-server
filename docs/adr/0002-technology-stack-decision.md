---
status: accepted
date: "2022-07-27"
deciders: vish
consulted: vish
informed: vish
---

# "The Server" Technology Stack

## Context and Problem Statement

To author a server, we need to pick a technology stack that
supports all the use-cases we need, and has the tooling needed
to enforce standards.

## Decision Drivers

The chosen technology stack must:

- Be one of the more popular stacks

- Support the tooling needed to enforce standards and
  conventions

- Have one of the popular IDEs supporting it as a
  first-class citizen

- Have a package / dependency manager to manage their
  versioning, updates, etc.

## Considered Options

The top 10 most popular technology stacks from both the popular
developer sites - Github and StackOverflow

| No. | Github     | StackOverflow |
| --- | ---------- | ------------- |
| 01  | Python     | Javascript    |
| 02  | Javascript | Python        |
| 03  | Java       | TypeScript    |
| 04  | TypeScript | Java          |
| 05  | Go         | C# .NET       |
| 06  | C++        | PHP           |
| 07  | Ruby       | C++           |
| 08  | PHP        | C             |
| 09  | C# .NET    | Go            |
| 10  | C          | Ruby          |

## Decision Outcome

The consensus is that the technology stack best suited for "The
Server" is [`node.js`](https://nodejs.org/en/)

### Positive Consequences

- Widespread usage / Popular technology stack
- Supports both, OOP and FP
- Package available for almost anything

### Negative Consequences

- Need to use Typescript for static type checking

## Pros and Cons of the Options

### [`node.js`](https://www.nodejs.org)

Pros & cons are already listed above.

### [Python](https://www.python.org)

Another good technology stack with pretty much the same pros and cons of
`node.js`.

Was not picked because of the author's preference for not encoding
information in whitespace

### [Java](https://java.com)

Does not have the tooling required for enforcing conventions and standards
written in Java, and which work on the command-line - which means that
either `node.js` or `Python` needs to be installed alongside it.

## Links

1. [Github's list of the most popular languages](https://madnight.github.io/githut/#/pull_requests/2022/1).
1. [StackOverflow's list of the most popular languages](https://insights.stackoverflow.com/survey/2021#most-popular-technologies-language-prof).
1. [Blog Post on choosing the Tech Stack](https://twyr.github.io/2022/07/01/choosing-a-tech-stack)

## More Information

Apart from the "Top 4" technology stacks on Github and StackOverflow, the
other 6 in the Top 10 are all great choices. They were not considered for
"The Server" since 2 in the top 4 provided everything that was needed.
