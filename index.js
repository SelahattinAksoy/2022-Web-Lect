/*

//creating person 
let person1={  
    name:"Selahattin",
    surname:"Aksoy"
}


//creating person with function
function object(name,surname){  
    let person1={  
        name:name,
        surname:surname
    }
    return person1
}


//creating person with constructer 
function object2(name,surname){  
    this.name=name,
    this.surname=surname
    this.run=function(){ console.log(this.name)}
}
console.log(object("name","surname"));


let person=new object2("Mert","Pire");
console.log(person)
person.run()



//creating person with  Object class (from js JS)
let other=new Object();
other.name="Hasan";
other.surname="Bor"

console.log(other)

*/

var allStudent=[]

function createStudent(name,surname,score,harf){  
    this.name=name,
    this.surname=surname,
    this.score=score,
    this.harf=harf
};


function addStudent(){  
    let name= document.getElementById("name").value;
    let surname= document.getElementById("surname").value;
    let score= document.getElementById("score").value;
    let harf=""
    if(score <=100 && score>0 && name.length>0 && surname.length>0 ){ 
        
        if(score>=90){ 
            harf="AA"
        }
        else if(score>=80){  
            harf="BA"
        }
        else if(score>=70){  
            harf="BB"
        }
        else{  
            harf="FF"
        }

        let newStudent=new createStudent(name,surname,score,harf);
        allStudent.push(newStudent);

        show()
    }
    else{ 
        alert("Boş yada puanı 100 ile 0 arası giriniz...")
    }
    
}

function show(){  

    let body= document.getElementById("tb");
    let tr=""

    for(var i=0; i<allStudent.length;i++){   

        tr+="<tr><td>" +allStudent[i].name+ 
        "<td>"+allStudent[i].surname+"</td>"+
        "</td><td>" +allStudent[i].harf+ 
        "<td><button class='btn btn-danger'onclick='deleteStudent("+i+")'>Delete</button></td>"+
        "</td></tr>"
    }
   
    body.innerHTML=tr

    let name= document.getElementById("name").value="";
    let surname= document.getElementById("surname").value="";
    let score= document.getElementById("score").value="";
}

function deleteStudent(name){  
    console.log(allStudent);
    allStudent.splice(allStudent,1);
    console.log(allStudent);
    show();
}


