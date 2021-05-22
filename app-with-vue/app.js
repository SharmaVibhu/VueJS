

Vue.createApp({
  data() {
    return {
      goals: [],
      enteredValue: ''
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredValue);
      this.enteredValue = '';
    }
  }
}).mount('#app');


Vue.createApp({
  data() {
    return {
      goals1: [],
      enteredValue1: ''
    };
  },
  methods: {
    addGoal1() {
      this.goals1.push(this.enteredValue1);
      this.enteredValue1 = '';
    }
  }
}).mount('#app2');


Vue.createApp({
  data() {
    return {
      goals2: [],
      enteredValue2: ''
    };
  },
  methods: {
    addGoal2() {
      this.goals2.push(this.enteredValue2);
      this.enteredValue2 = '';
    }
  }
}).mount('#app1');



Vue.createApp({
  data() {
    return {
      goals3: [],
      enteredValue3: ''
    };
  },
  methods: {
    addGoal3() {
      this.goals3.push(this.enteredValue3);
      this.enteredValue3 = '';
    }
  }
}).mount('#app3');



Vue.createApp({
  data() {
    return {
      goals4: [],
      enteredValue4: ''
    };
  },
  methods: {
    addGoal4() {
      this.goals4.push(this.enteredValue4);
      this.enteredValue4 = '';
    }
  }
}).mount('#app4');

let root = document.getElementById("root");


class todoList {
  constructor(place, title = "to-do list") {

    this.place = place;
    this.title = title;
    this.cardArray = [];

    this.render();
  }

  addToDo() {
    let text = this.input.value;
    this.cardArray.push(new Card(text, this.div, this));
  }

  render() {
    this.createToDoListElement();
    this.place.append(this.todoListElement);
  }

  createToDoListElement() {
    //Create elements
    this.h2 = document.createElement('h3');
    this.h2.innerText = this.title;
    this.input = document.createElement('input');
    this.input.classList.add("comment");
    this.button = document.createElement('button');
    this.button.innerText = '+Add another card';
    this.button.id = "to-do-list-button";
    this.div = document.createElement('div');
    this.todoListElement = document.createElement('div');

    //Add Event listener
    this.button.addEventListener('click', () => {
      if (this.input.value != "") {
        this.addToDo.call(this);
        this.input.value = "";
      }
    });

    //Append elements to the to-do list element
    this.todoListElement.append(this.h2);
    this.todoListElement.append(this.input);
    this.todoListElement.append(this.button);
    this.todoListElement.append(this.div);
    this.todoListElement.classList.add("todoList");
  }
}


class Card {
  constructor(text, place, todoList) {

    this.place = place;
    this.todoList = todoList;
    this.state = {
      text: text,
    }
    this.render();
  }

  render() {
    this.card = document.createElement('div');
    this.card.classList.add("card");
    this.card.addEventListener('click', (e) => {
      if (e.target != this.deleteButton) {
        this.showMenu.call(this);
      }
    });
    this.p = document.createElement('p');
    this.p.innerText = this.state.text;

    this.deleteButton = document.createElement('button');
    this.deleteButton.innerText = "X";
    this.deleteButton.addEventListener('click', () => {
      this.deleteCard.call(this);
    });

    this.card.append(this.p);
    this.card.append(this.deleteButton);

    this.place.append(this.card);
  }

  deleteCard() {
    this.card.remove();
    let i = this.todoList.cardArray.indexOf(this);
    this.todoList.cardArray.splice(i, 1);
  }

}
class Comment {
  constructor(text, place, card) {
    this.text = text;
    this.place = place;
    this.card = card;
    this.render();
  }

  render() {
    this.div = document.createElement('div');
    this.div.className = "comment";
    this.div.innerText = this.text;

    this.place.append(this.div);
  }
}

let addTodoListInput = document.getElementById("addTodoListInput");
let addTodoListButton = document.getElementById("addTodoListButton");

addTodoListButton.addEventListener('click', () => {
  if (addTodoListInput.value.trim() != "") {
    new todoList(root, addTodoListInput.value);
    addTodoListInput.value = "";
  }
});

