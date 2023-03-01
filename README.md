# ToDoList with the ability to create tasks

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

3. Each task has: Serial number (id); Title; Description; Status;

4. When clicking on a task, a modal window appears with the following task data:
   ◊ Title; ◊ Full description; ◊ Status; ◊ "Close" button;

5. After clicking on the "Close" button, the modal disappears.
