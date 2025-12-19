# 🎓 Challenge: Course Progress Tracker

### The Scenario

You are building the logic for a learning platform. You need an object that stores course topics, tracks completion, and calculates the overall progress percentage dynamically.

---

## 🏗️ Learning Objectives

- Manipulating **Arrays of Objects**.
- Understanding **Object References** (updating values without re-assigning arrays).
- Using **Getters** for dynamic data calculation.
- Practicing **Iteration** (loops or array methods).

---

## 📝 Tasks

### 1. The Data Structure

Create an object `myBootcamp`. It should have:

- `name`: (String). Eg: `"PrincessCamp"`
- `topics`: An array of objects, each with `title` (String) and `isCompleted` (Boolean).

### 2. The Methods

Your object should handle the full lifecycle of a topic (CRUD: Create, Read, Update, Delete).

- **`addTopic(topicTitle)`**: **[CREATE]** Adds a new topic object to the `topics` array. Each object should have the `title` provided and `isCompleted` set to `false` by default.
- **`listAll()`**: **[READ]** Iterates through the `topics` array and prints each one to the console using the following format:

  - `- [x] Topic Name` (if `isCompleted` is `true`)
  - `- [ ] Topic Name` (if `isCompleted` is `false`)

- **`markAsComplete(topicTitle)`**: **[UPDATE]** Finds the topic in the array by its title and updates `isCompleted` to `true`.
- **`markAsIncomplete(topicTitle)`**: **[UPDATE]** Finds the topic in the array by its title and updates `isCompleted` to `false`.
- **`removeTopic(topicTitle)`**: **[DELETE]** Removes the topic with the matching title from the `topics` array.

**Populate the topics you're studying**

List of topics "Welcome to Learn JavaScript", "Introduction", "Conditionals", "Functions", "Scope", "Arrays", "Loops", "Iterators", "Objects", "Next Steps".

**Mark the completed ones and list all**

### 3. The Getter

- **`percentageComplete`**: A getter that calculates the percentage of topics finished.
  - Formula: `(Count of Completed / Total Topics) * 100`. Output: `80% complete`

---

## 💡 Hints & Logic (Click to expand)

<details>
  <summary>View Logic Hints</summary>

### Finding an item in an Array

To update an object inside an array, you first need to locate it. You can use the `.find()` method:

```javascript
const topic = this.topics.find((t) => t.title === topicTitle);
if (topic) {
  topic.isCompleted = true; // Updates by reference!
}
```

### Calculating the Percentage

The Manual Way: Initialize a counter at 0. Use a for loop or `.forEach()` to check every topic. If topic.isCompleted is true, add 1 to your counter.

The "Pro" Way: Use `.filter()` to create a temporary array of only completed tasks, then check its .length.

```javaScript
const completedCount = this.topics.filter(t => t.isCompleted).length;
```

### Formatting the Return

Inside your getter, remember to return a string if you want it to be user-friendly:

```javascript
return `${Math.round(percentage)}% complete`;
```

#### Adding (Create)

Remember that `topics` is an array of **objects**, not just strings. You need to push a new object:

```javascript
this.topics.push({ title: topicTitle, isCompleted: false });
```

#### Listing (Read)

Use a template literal and a ternary operator inside a loop to determine if you should print `[x]` or `[ ]`:

```javascript
const checkbox = topic.isCompleted ? "x" : " ";
console.log(`- [${checkbox}] ${topic.title}`);
```

#### Removing (Delete)

The most common way to "delete" in JS is to use `.filter()`. You essentially redefine the array to exclude the item you don't want:

```javascript
this.topics = this.topics.filter((t) => t.title !== topicTitle);
```

</details>

## Testing your code

```javascript
console.log(myBootcamp.percentageComplete); // Should be 0%
myBootcamp.markAsComplete("HTML Basics");
console.log(myBootcamp.percentageComplete); // Should update!
```
