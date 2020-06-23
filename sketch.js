var form, database;
function setup(){
    database = firebase.database();
    form = new Form();
    form.display();
}
function draw(){
}
function submitData(){
    let ref = database.ref('voters/'+nameInput.value());
    ref.set({
        name: {
            firstName: nameInput.value(),
            lastName: lastnameInput.value(),
            emailId: emailInput.value()
        },
        questions: [
            question1Radio.value(),
            question2Radio.value(),
            question3Radio.value(),
            question4Radio.value(),
            question5Radio.value(),
            question6Check1.checked(),
            question6Check2.checked(),
            question6Check3.checked(),
            question6Check4.checked(),
            question7Area.value()
        ]
    });
}