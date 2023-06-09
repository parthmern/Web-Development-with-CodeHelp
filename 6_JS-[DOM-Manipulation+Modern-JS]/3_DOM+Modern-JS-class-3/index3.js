//single threading

function adPara(){
    let para = document.createElement('p');
    para.textContent = 'js is sinle';

    document.body.appendChild(para);
}

function appendNewMsg ( ){

    let para = document.createElement('p');
    para.textContent = 'kya hal chal' ; 

    document.body.appendChild(para);
}

adPara(); 
appendNewMsg();

// execution from top to botttom - synchromosius language
//single thrad - it does not execute multiple line at the same time





