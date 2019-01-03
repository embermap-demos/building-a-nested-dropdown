# Data structure quotes

"Data dominates. If you've chosen the right data structures and organized things well, the algorithms will almost always be self-evident. Data structures, not algorithms, are central to programming."

- Rob Pike, creator of Go

"I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships."

- Linus Torvalds, creator of Linux, Git

"Show me your flowcharts and conceal your tables, and I shall continue to be mystified. Show me your tables, and I won't usually need your flowcharts; they'll be obvious."

- Fred Brooks, creator of IBM System/360, author of Mythical Man Month



# Our data structure

Given the menu:

  list:1 => [ item:1 | item:2 ]
                         |
                         |
                      sublist:1 => [ item:2-1  | item:2-2 ]


## Current data structure

Currently, each List/Items component subtree has its own independent state.

```js
list1.activeItem = "item:2";
sublist1.activeItem = "item:2-1";
```

This creates problems, because we can end up with the following:

```js
list1.activeItem = null;
sublist1.activeItem = "item:2-1";
```

So we need a more constrained data structure.


## Proposed data structure

The states of these two lists are related, so we want a data structure that reflects that.

We also want a data structure that can be easily shared across both lists.

How about a single Array:

```js
rootList.activeItems = [ "item:2", "item:2-1" ];
```

The first element corresponds to the first (root) list, the second to the sublist, and so on. So this is really a path of active items through the tree of lists.

By using a single data structure like an Array, we can make it so any action from our users mutate that single Array. And that should make it easier for us to keep our data structure in a valid state.
