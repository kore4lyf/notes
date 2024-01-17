# Keep a Downstream git Repository Current with Upstream Repository Changes

A downstream repository (aka a “*fork*”) maintainer commonly needs to stay current with upstream work (aka "*original*"). The case is development continues on the ```upstream``` repo while you work on your own ```origin``` fork. You want to ```fetch``` the upstream changes and apply them to your ```origin``` so you don't make conflicts.

![image cannot be displayed](https://i.stack.imgur.com/LtFGa.png)

The following steps allow you to achieve this on the command line in a local git repository.

## Add the Remote Upstream Repository

This step defines the upstream repository of your fork. First is the syntax followed by an example.

```
git remote add <any_name_you_choose> [Upstream git URL]
git remote add upstream https://github.com/QubesOS/qubes-doc.git
```

## Fetch the Upstream Branches

```
git fetch <the_name_you_chose_earlier>
git fetch upstream
```

## Merge Upstream Changes into your Downstream Repository

From your master branch, use the following merge command to merge the upstream master branch changes into your local source:

```
git checkout origin/master
git merge upstream/master
```

You then can either merge into the branch you were previously working on or start a new branch. Since starting a new branch is easy, this sample is merging the ```master``` branch into the ```develop``` branch.

```
git checkout origin/develop
git merge origin/master
```

# Workflow Example

![image cannot be displayed](https://docs.rhodecode.com/RhodeCode-Enterprise/_images/git-flow-diagram.png)

1. You *fork* from the ```upstream``` repo using ```clone``` and then create a *local* copy on your computer.
2. You create a new branch ```branch-1``` off of the ```master``` branch to do your work on.
3. You ```push``` those commits from ```branch-1``` to your own ```origin``` repo.
4. You then create a *pull request* with the ```upstream``` repo into the ```master``` branch.
5. Your *pull request* is ```merged``` into the ```master``` branch and development continues on the ```upstream``` ```master``` branch past your *local* and ```origin``` repo.
6. You then have to ```fetch``` the ```upstream``` repo before you continue your work to avoid conflicts
7. You then ```push``` the ```upstream``` changes to your ```origin``` repo keeping ```origin``` up-to-date with ```upstream```.

# Legend

|  Access  | Upstream | Origin | Local |
|----------|:--------:|:------:|:-----:|
| Own      |   No     |  Yes   |  Yes  |
| Read     |   Yes    |  Yes   |  Yes  |
| Write    |   No     |  Yes   |  Yes  |
| Remote   |   Yes    |  Yes   |  No   |