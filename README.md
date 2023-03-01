# ToDoList with the ability to create tasks

Live page is [here](https://veronikanos.github.io/todo/)


Used technologies: React.js. Styled with css modules.

The task is performed without auxiliary libraries and is minimally stylized. A
modal window opens by clicking on the title or description. If the title or
description text is too long in the ToDo table, part of the text is hidden from
the user and only shown inside the modal window.

#### According to task, the following issues were resolved:

1. When clicking on the "Create" button (after the user enters the title and
   description), a new task appears at the end of the list.

2. If the user leaves the field blank, it is impossible to create a new task. In
   this case, after clicking on the "Create" button, the empty input has a red
   border and the error message "This field is empty" appears.
   ![image](https://user-images.githubusercontent.com/49239848/222289215-d1230711-583e-418e-9fec-f9d3731b8c0b.png)

3. Each task has: Serial number (id); Title; Description; Status;
![image](https://user-images.githubusercontent.com/49239848/222288960-f8287904-d7cb-4e6a-93bc-a06e0bc51091.png)

4. When clicking on a task, a modal window appears with the following task data:
   ◊ Title; ◊ Full description; ◊ Status; ◊ "Close" button;
   ![image](https://user-images.githubusercontent.com/49239848/222289042-c908c255-3ae3-4657-9c6e-bdf886d1f004.png)

5. After clicking on the "Close" button, the modal disappears.

---

### HOW TO RUN THIS PROJECT LOCALLY

Clone this repo:
`git clone https://github.com/Veronikanos/todo.git`

In the project directory, you can run:

#### `npm install`

then

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000/todo](http://localhost:3000/todo) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


