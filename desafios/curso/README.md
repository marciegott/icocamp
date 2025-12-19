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

**Crete the following methods**

- **`addTopic(topicTitle)`**: Adds a new topic to the `topics` array and sets `isCompleted` to `false`.
- **`markAsComplete(topicTitle)`**: Finds the topic by title and sets `isCompleted` to `true`.
- **`markAsIncomplete(topicTitle)`**: Finds the topic by title and sets `isCompleted` to `false`.
- **`listAll()`**: Prints to the console the list of topics in the format:
  - `- [x] Topic Name`, when complete.
  - `- [ ] Topic Name`, when incomplete.

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

</details>

## Testing your code

```javascript
console.log(myBootcamp.percentageComplete); // Should be 0%
myBootcamp.markAsComplete("HTML Basics");
console.log(myBootcamp.percentageComplete); // Should update!
```
