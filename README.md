
## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector / querySelectorAll`

- **getElementById("id")**  
  - Used to select a single element by its unique `id`.  
  - Always returns only **one element** (or `null` if not found).  
  - Example:  
    ```js
    const title = document.getElementById("mainTitle");
    ```

- **getElementsByClassName("class")**  
  - Used to select **multiple elements** that have the same class.  
  - Returns an **HTMLCollection** (looks like an array but not exactly array).  
  - You usually need to loop through it to access items.  
  - Example:  
    ```js
    const items = document.getElementsByClassName("list-item");
    ```

- **querySelector("selector")**  
  - Selects the **first matching element** using CSS selectors.  
  - Example:  
    ```js
    const firstItem = document.querySelector(".list-item");
    ```

- **querySelectorAll("selector")**  
  - Selects **all matching elements** using CSS selectors.  
  - Returns a **NodeList**, which allows `forEach`.  
  - Example:  
    ```js
    const allItems = document.querySelectorAll(".list-item");
    ```

---

## 2. How to create and insert a new element into the DOM?

1. Create the element with `document.createElement()`.  
2. Add text or attributes.  
3. Insert it into the DOM with methods like `appendChild()` or `append()`.  


## 3. What is Event Bubbling and how does it work?

Event Bubbling is the process where an event starts from the element that triggered it and then moves upward through its parent elements.  


---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique where instead of attaching event listeners to multiple child elements, we attach a single listener to their parent. Since events bubble up, the parent can "catch" the event and identify which child triggered it.

**Why it’s useful:**
- Reduces memory usage (one listener instead of many).
- Makes code cleaner.

## 5. What is the difference between preventDefault() and stopPropagation() methods?


# preventDefault() vs stopPropagation()

In JavaScript event handling, `preventDefault()` and `stopPropagation()` are often used, but they do very different things.  

---

##  preventDefault()
- **Definition:** Stops the **default browser behavior** for a specific event.  
- **Common Uses:**
  - Prevent a form from submitting.
  - Prevent a link from navigating to another page.
  - Prevent right-click context menu.