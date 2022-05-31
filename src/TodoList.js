class TodoList { 
    constructor() {
        this.id = 1
        this.items = []
        this.status = "incomplete"
        
    }

    create(description) {
        let todoItem ={
            id: this.id++,
            text:description ,
            status: this.status

        }

        this.items.push(todoItem)

        return todoItem
        
    }

    getToDo () {
        return this.items
    }

    SetCompleted (completedId){
      let completedItem = this.items.find (todoItem => todoItem.id === completedId)
      
      completedItem.status ='complete'
      
      
    }

    getCompleted () {
        
        return this.items.find (todoItem => todoItem.status ==='complete')
    }

    getIncompleted () {
        return this.items.find(todoItem => todoItem.status==='incomplete')
    }

    searchItem (searchID) {
        let findItem = this.items.find (todoItem => todoItem.id === searchID)
        if (!findItem) {
            return "Item doesn't exist";
        }
        else return findItem
    }

    removeItem (removeID) {
        return this.items.splice(removeID--,1);
        


    }

    

}


//const todoList = new TodoList 
//todoList.create ('do laudry')
//todoList.create('make the bed')

//todoList.SetCompleted(2)

//console.log(todoList)




module.exports = TodoList
