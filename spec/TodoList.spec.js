const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })



  it ('get all items',()=>{
    const todoList= new TodoList()
    todoList.create('do laundry')
    todoList.create('make the bed')
    const expected = [{id: 1, text: "do laundry", status: "incomplete"}, {id: 2, text: "make the bed", status: "incomplete"}]

    const result= todoList.getToDo()

    expect(result).toEqual(expected)
   
  })


  it ('completed by id',()=>{
    const todoList = new TodoList()
    todoList.create('do laundry')
    todoList.create('make the bed')
    todoList.SetCompleted(1)

    const expected=[{id: 1, text: "do laundry", status: "complete"}, {id: 2, text: "make the bed", status: "incomplete"}]

    const result= todoList.getToDo()

    expect(result).toEqual(expected)

  })


  it ( 'get completed', () => {
    const todoList = new TodoList()
    todoList.create('do laundry')
    todoList.create('make the bed')
    todoList.SetCompleted(1)

    const expected={id: 1, text: "do laundry", status: "complete"}

    const result= todoList.getCompleted()

    expect(result).toEqual(expected)

  }
  )

  it('find item',() => {
    const todoList = new TodoList ()
    todoList.create('do laundry')
    todoList.create('make the bed')

    const expected = "Item doesn't exist"

    const result = todoList.searchItem (5)
    expect(result).toEqual(expected)





  })

  it('remove item',() =>{
    const todoList = new TodoList ()
    todoList.create('do laundry')
    todoList.create('make the bed')

    const expected =[{id: 2, text: "make the bed", status: "incomplete"}]

    const result = todoList.removeItem(1)
    expect(result).toEqual(expected)


  }

  )
})
