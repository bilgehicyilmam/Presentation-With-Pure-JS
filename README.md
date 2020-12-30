# Presentations-With-JS

# Description

This project is a navigation system with pure Javascript. 

# Specification
 
- It is similar to powerpoint presentation. The system move forward and backward within the pages.
- It is possible to revisit a concept, and come back to where it is left.
- The system enables to navigate across pages with table of contents.
- The user may call a concept within html pages as well.

# Content pages

Content pages are in html format. 
The organization of the content is in sections under chapters.
The file structure is similar to the figure given below.

```
course 
|- chA
|  |- secA
|  |  |- p1.html
|  |  |- p2.html
|  |  |- ...
|  |  |- pN.html
|  |- secB
|  |  |- c1.html
|  |  |- c2.html
|  |  |- ...
|  |  |- cN.html
|- chB
|  |- secA
|  |  |- d1.html
|  |  |- d2.html
|  |  |- ...
|  |  |- dN.html
|  ...
```

# Concept definition

A concept is a number of html pages.

```javascript
const conceptMixed = function () {
    return {
        "id": "conceptA",
        "arrPage": [
            'chA/secA/p1.html',
            'chB/secA/d1.html',
            'chA/secA/p2.html',
            '*conceptB',
            'chB/secA/d4.html'
        ]
    }
}
```

In `arrPage` the order of presentation is given. 
That is, page `chA/secA/p1.html` is presented first, then page `chB/secA/d1.html`.


```javascript
const conceptB = function () {
    return {
        "id": "conceptB",
        "arrPage": [
            'chA/secB/c1.html',
            'chA/secB/c2.html',
            'chA/secB/c3.html'
        ]
    }
}
```

The result of call to `conceptMixed()` is the following order of presentation:

1. `chA/secA/p1.html`
1. `chB/secA/d1.html`
1. `chA/secA/p2.html`
1. `chA/secB/c1.html`
1. `chA/secB/c2.html`
1. `chA/secB/c3.html`
1. `chB/secA/d4.html`

Course always starts with a call to `course()`.


# `courseStructure.js`

Concept definitions such as `course()` and `conceptA` are given in file `courseStructure.js`.
So the system read `courseStructure.js`, starts with `course()` and navigates accordingly.

