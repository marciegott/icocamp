# 🍽️ Challenge: Meal Maker

Welcome to the **Meal Maker** challenge! In this project, you will practice using JavaScript Objects, specifically focusing on **Getters** and **Setters**.

### The Scenario

A restaurant has hired you to create a function for their website that allows them to set a meal and price each morning for **Today’s Special**. Your goal is to ensure that the data is handled safely, preventing errors (like setting a price as a string) by using setter methods to validate input.

---

## 🏗️ Learning Objectives

- Creating and manipulating JavaScript **Objects**.
- Using **Setters** to validate data types before assignment.
- Using **Getters** to return formatted strings based on object state.
- Understanding the convention of "private" properties using the underscore (`_`) prefix.

---

## 📝 Tasks

### Create the Menu Object

- [ ] **1.** Create an empty object named `menu` in `app.js`.
- [ ] **2.** Inside `menu`, add a `_meal` property initialized to an empty string (`''`).
- [ ] **3.** Inside `menu`, add a `_price` property initialized to `0`.
- [ ] **4.** **Test Direct Manipulation:** Outside the object, try to set `menu._meal = 123` and `menu._price = 'expensive'`. `console.log(menu)` to see why this is bad for a website! _Delete these test lines once finished._

### Add Setter Methods

- [ ] **5.** Inside the `menu` object, use the `set` keyword to create a `meal` setter that accepts `mealToCheck` as a parameter.
- [ ] **6.** In the `meal` setter, add an `if` statement to check if `mealToCheck` is a `string`. If it is, assign it to `this._meal`.
- [ ] **7.** Create a `price` setter that accepts `priceToCheck`. Ensure it only assigns the value to `this._price` if it is a `number`.

### Add a Getter Method

- [ ] **8.** Below the setters, use the `get` keyword to create a `todaysSpecial` method.
- [ ] **9.** Inside the getter, check if both `_meal` and `_price` are truthy.
- If yes, return: `"Today's Special is [meal] for $[price]!"`
- If no, return: `"Meal or price was not set correctly!"`

### Get Today's Special

- [ ] **10.** Use the setters to assign a valid meal and price (e.g., `'Spaghetti'`, `5`).
- [ ] **11.** `console.log(menu.todaysSpecial)` to see the result!

---

## 🚀 Bonus Challenge

Once you finish the core tasks, try to:

1. Create an array of several meal objects.
2. Write a function that randomly selects one of those meals and uses the setters to update the `menu` object.

---

## 💡 Quick Hint: The `typeof` Operator

To check if a value is a string or a number in your setters, use the `typeof` operator:

```javascript
if (typeof mealToCheck === "string") {
  // Do something
}
```

---
