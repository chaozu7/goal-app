Vue.createApp({
    data(){
        return {
            goals: [],
            enteredValue: '',
            vueLink: 'https://www.udemy.com/course/vuejs-2-the-complete-guide',
            firstMotivation: "<strong>C'mon c'mon!</strong>",
            secondMotivation: "You can do it!"

        };
    },
    methods: {
        addGoal(){
            this.goals.push(this.enteredValue);
            this.enteredValue ='';
        },
        motivationTxt(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return this.firstMotivation;
            }
            else {
                return this.secondMotivation;
            }                
        }
    }
}).mount('#user-goal');




/* 
Imperative approach - only JS

const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEL = document.querySelector('ul');

function addGoal(){
    const enteredValue = inputEl.value;
    const listItemEl = document.createElement('li');
    listItemEl.textContent = enteredValue;
    listEL.appendChild(listItemEl);
    inputEl.value = '';
};

buttonEl.addEventListener('click', addGoal); */

