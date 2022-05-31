// Add your domain model below
TodoItem
- properties
  - description: String
  - isCompleted: Boolean
  - id: Int

class TodoList
- properties
  - nextId: Int
  - items: Array of TodoItem
- methods
  - create(description: String) returns TodoItem