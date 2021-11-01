
## Contributing for the first time? We will help you out.😊

![GitHub custom open for collaboration](https://img.shields.io/badge/Open%20For-Collaboration-brightgreen?style=for-the-badge)

Refer to the following articles on the basics of Git and Github and can also contact the Project Mentors, in case you are stuck:

- [Getting started with Git and GitHub](https://docs.github.com/en/free-pro-team@latest/github/getting-started-with-github)
- [Forking a Repo](https://help.github.com/en/github/getting-started-with-github/fork-a-repo)
- [Cloning a Repo](https://help.github.com/en/desktop/contributing-to-projects/creating-a-pull-request)
- [How to create a Pull Request](https://opensource.com/article/19/7/create-pull-request-github)

***If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).***

## How to contribute?

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.png?v=103)](https://github.com/ellerbrock/open-source-badges/)

- Take a look at the Existing [Issues](https://github.com/nerdynikhil/codestreak.git) or create your own Issues!
- Wait for the Issue to be assigned to you after which you can start working on it.
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Read the [Code of Conduct](https://github.com/Swarnimashukla/Automatic-attendance-management-system.git)
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this Script is all about.

## Making your first pull request:

**1.** Fork [this](https://github.com/nerdynikhil/codestreak.git) repository.
Click on the <a href="https://github.com/nerdynikhil/codestreak.git"><img src="https://img.icons8.com/ios/24/000000/code-fork.png"></a> symbol at the top right corner.

**2.** Clone the forked repository. Open terminal and type:

```bash
git clone https://github.com/<your-github-username>/codestreak.git
```

**3.** Navigate to the project directory.

```bash
cd codestreak
```

**4.** Make changes in source code.

**5.** Stage your changes and commit

```bash
#Add changes to Index
git add .
#Commit to the local repo
git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```bash
git push
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request) !

**9.** **Congratulations!** Sit and relax, you've made your contribution to Automatic-attendance-management-system.


***:trophy: After this, project leaders and mentors will review the changes and will merge your PR if they are found good, otherwise we will suggest the required changes.***

### Commit Conventions

#### Here's a list of some good to have points, that can add more value to your contribution logs.

- Use the present tense (example: "Add feature" and not "Added feature")
- Use the imperative mood (example: "Move item to...", instead of "Moves item to...")
- Limit the first line (also called subject line) to 50 characters or less
- Separate subject from body with a blank line
- Do not end the subject line with a period
- Wrap the body at 72 characters
- Use the body to explain what, why, vs, and how
- Reference issues and pull requests liberally after the first line

For more detailed reference to the above points, refer here: https://chris.beams.io/posts/git-commit.



Each commit message must adhere to the following format:
```
<type>(scope): <description> - <issue number>

[optional body]
```
This improves the readability of the messages

#### Type

It can be one of the following:
1. **feat**: Addition of a new feature
2. **fix**: Bug fix
3. **docs**: Documentation Changes
4. **style**: Changes to styling
5. **refactor**: Refactoring of code
6. **perf**: Code that affects performance
7. **test**: Updating or improving the current tests
8. **build**: Changes to Build process
9. **revert**: Reverting to a previous commit 
10. **chore** : updating grunt tasks etc

If there is a breaking change in your Pull Request, please add `BREAKING CHANGE` in the optional body section

#### Scope
The file or folder where the changes are made. If there are more than one, you can mention any

#### Description
A short description of the issue

#### Issue number
The issue fixed by this Pull Request.

The body is optional. It may contain short description of changes made.

Following all the guidelines an ideal commit will look like:
```
    git commit --signoff -m "docs: Contributing guidelines - #215"
```

## Issues
For major changes, you are welcomed to open an issue  about what you would like to contribute. Enhancements will be appreciated.
