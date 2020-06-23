class Form{
    constructor(){
    }
    display(){
        createElement('h1','Survey for daily wagers');
        createElement('hr');
        window.introP = createP('This is a survey to get people\'s opinion on the current condition of daily wagers.<br>Please fill in all the options');
        window.SurveyForm = createElement('form');
            SurveyForm.id('form');
        window.nameDiv = createDiv('<h2>Name: </h2>');
            nameDiv.id('name');
            nameDiv.parent('#form');
            nameDiv.child(createElement('hr'));
            window.FirstNameDiv = createDiv('First name: ');
                FirstNameDiv.id('first');
                FirstNameDiv.parent('#name');
                window.nameInput = createInput('first name...');
                    nameInput.parent('#first');
            window.LastNameDiv = createDiv('Last name: ');
                LastNameDiv.id('last');
                LastNameDiv.parent('#name');
                window.lastnameInput = createInput('last name...');
                    lastnameInput.parent('#last');
            window.emailDiv = createDiv('Your email: ');
                emailDiv.id('email'); 
                emailDiv.parent('#name');
                window.emailInput = createInput('email');
                    emailInput.parent('#email');
                    emailInput.style('margin-left: 45px;');
        window.questionsDiv = createDiv('<h2>Questions: </h2>');
            questionsDiv.id('question');
            questionsDiv.parent('#form');
            questionsDiv.style('margin-top: 20px;');
            questionsDiv.child(createElement('hr'));
            window.question1 = createDiv('1. Do you think that daily wagers should be given opportunities to get free education?');
                question1.id('question1');
                question1.parent('#question');
                window.question1Radio = createRadio('Question1radio');
                    question1Radio.parent('#question1');
                    question1Radio.option('Yes');
                    question1Radio.option('No');
            window.question2 = createDiv('2. Do you think that daily wagers should regularly be given money grants and other benifits from the government?');
                question2.id('question2');
                question2.parent('#question');
                window.question2Radio = createRadio('Question2radio');
                    question2Radio.parent('#question2');
                    question2Radio.option('Yes, they need money','Yes');
                    question2Radio.child(createElement('br'));
                    question2Radio.option('No, they are already earning enough','No');
                    question2Radio.child(createElement('br'));
                    question2Radio.option('Maybe, its the governments wish','Maybe');
            window.question3 = createDiv('3. Do you think that the current economic and social conditions of daily wagers is bad and the government should take steps to solve this?');
                question3.id('question3');
                question3.parent('#question');
                window.question3Radio = createRadio('Question3Radio');
                    question3Radio.parent('#question3');
                    question3Radio.option('Yes, they are disrespected in the society and their economic condition is pretty bad','Yes');
                    question3Radio.child(createElement('br'));
                    question3Radio.option('No, they get what they deserve','No');
                    question3Radio.child(createElement('br'));
                    question3Radio.option('Maybe, they are not in a bad condition right now','Maybe');
            window.question4 = createDiv('4. Would you like to create a fund to help improve the social and economic condition of daily wagers?');
                question4.id('question4');
                question4.parent('#question');
                window.question4Radio = createRadio('Question4Radio');
                    question4Radio.parent('#question4');
                    question4Radio.option('Yes, I would like to create a fund for daily wagers','Yes');
                    question4Radio.child(createElement('br'));
                    question4Radio.option('No, I don\'t want to create a fund for daily wagers','No');
                    question4Radio.child(createElement('br'));
                    question4Radio.option('Maybe, depends on how money I have','Maybe');
            window.question5 = createDiv('5. How much would you spend to help improve the lives of daily wagers(regardless your capital)?');
                question5.id('question5');
                question5.parent('#question');
                window.question5Radio = createSelect('Question5Select');
                    question5Radio.parent('#question5');
                    question5Radio.option('100');
                    question5Radio.option('200');
                    question5Radio.option('500');
                    question5Radio.option('1000');
                    question5Radio.option('2000');
                    question5Radio.option('5000');
                    question5Radio.option('10000');
            window.question6 = createDiv('6. If you were a social worker, then what would you do to improve the condition of daily wagers?');
                question6.id('question6');
                question6.parent('#question');
                window.question6Check1 = createCheckbox('Arrange free educative camps for children of daily wagers',false);
                    question6Check1.parent('#question6');
                window.question6Check2 = createCheckbox('Arrange free medical camps to help the sick and poor people',false);
                    question6Check2.parent('#question6');
                window.question6Check3 = createCheckbox('Distribute blankets and clothes to the daily wagers',false);
                    question6Check3.parent('#question6');
                window.question6Check4 = createCheckbox('Construct houses for the daily wagers to live in',false);
                    question6Check4.parent('#question6');
            window.question7 = createDiv('7. What are your thoughts about daily wagers? Please write here freely');
                question7.id('question7');
                question7.parent('#question');
                question7.child(createElement('br'));
                window.question7Area = createElement('textarea');
                    question7Area.parent('#question7');
                    question7Area.size(450,250);
            window.submitBtn = createButton('submit');
            submitBtn.parent('#form');
            submitBtn.attribute('type','button');
            submitBtn.mouseClicked(this.checkData);
    }
    checkData(){
        if(nameInput.value() == "first name..." || nameInput.value() == ""){
            alert("You need to fill the name text box");
            nameInput.elt.focus();
            return false;
        }
        if(lastnameInput.value() == "last name..." || lastnameInput.value() == ""){
            alert("You need to give a last name too");
            lastnameInput.elt.focus();
            return false;
        }
        if(emailInput.value().indexOf("@") == -1 || emailInput.value().indexOf(".") == -1){
            alert("The email text box is either empty or way it is entered is not valid");
            emailInput.elt.focus();
            return false;
        }
        if(question1Radio.value() == "" || question1Radio.selected() == undefined){
            alert("Please fill the following field: question no.1");
            return false;
        }
        if(question2Radio.value() == "" || question2Radio.selected() == undefined){
            alert("Please fill the following field: question no.2");
            return false;
        }if(question3Radio.value() == "" || question3Radio.selected() == undefined){
            alert("Please fill the following field: question no.3");
            return false;
        }if(question4Radio.value() == "" || question4Radio.selected() == undefined){
            alert("Please fill the following field: question no.4");
            return false;
        }
        if(question6Check1.checked() == false && question6Check2.checked() == false && question6Check3.checked() == false && question6Check4.checked() == false){
            alert("Please fill the following field: question no.6");
            return false;
        }
        submitData();
    }
}