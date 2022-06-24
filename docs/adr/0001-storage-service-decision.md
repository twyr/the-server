---
status: accepted
date: "2022-06-24"
deciders: vish
consulted: vish
informed: vish
---

# Storing "The Server" artifacts

## Context and Problem Statement

As discussed [here]({% post_url 2022-06-16-1-a-note-on-business-software %}),
all artifacts of "The Server" should be stored in a place that is easily
accessible to everyone involved in the project.

## Decision Drivers

The chosen storage solution must:

- Be accessible to everyone involved at all times

- Allow the project owner to configure different levels
  of access to different people

- Be as economical as possible

Additional Drivers:

- Allow creation and tracking of work items - new feature ideas,
  issues / bugs in existing features, etc.

## Considered Options

- [Github](https://www.github.com)
- [Gitlab](https://www.gitlab.com)
- [Bitbucket](https://bitbucket.org/)
- [Source Hut](https://sourcehut.org/)

## Decision Outcome

There is no real reason why only one option out of the four needs to be
picked - the distributed nature of the Git version control system allows
for the artifacts to be stored in multiple places at the same time.

This reduces the risk of access being denied due to issues with the
storage solution.

The consensus is that all artifacts of "The Server" will be stored in
two places:

- [Github](https://www.gihub.com)
- [Gitlab](https://www.gitlab.com)

### Positive Consequences

- Choosing to store "The Server" artifacts in multiple storage solutions
  at the same time reduces the risk of non-availability

### Negative Consequences

- None known

## Pros and Cons of the Options

### [Github](https://www.github.com) & [Gitlab](https://www.gitlab.com)

The standard / de-facto solutions for distributed access to software artifacts.
Apart from providing **_free_** storage for publicly accessible code, both have
good support for tracking the status of new features, issues / bugs, etc.

### [Bitbucket](https://www.bitbucket.org)

Another good solution with no major downsides. However, work item tracking
requires the usage of Jira, and is not native. Jira is known to be a product
for "enterprises", and is not easy to configure - a negative against Bitbucket.

### [Source Hut](https://sourcehut.org)

Still in the "alpha" phase, with no known timeline for a full production
release. This is a negative.

## Links

None.

## More Information

There are several other code repositories available, as well, including:

- [SourceForge](https://sourceforge.net/) - not considered because of the
  advertisements all over the place (bad developer experience), and third-party
  software bundling

- [Gogs](https://gogs.io) - self-hosted, which means I have to setup and
  maintain the server. No thanks.

- [Gitea](https://gitea.io/en-us/) - Based on Gogs, with the same issues.

Additionally, Amazon and other providers also have their version of on-the-cloud
VCS repositories. This space has a very long tail.

For businesses, going with one of the long-tail options is a no-go, simply
because the people working on the team may not be familiar / comfortable with
the solution.
