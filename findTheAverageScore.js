let students = [
    {
        name: "Ha",
        gender: 'female',
        poin: 8
    },
    {
        name: "Huy",
        gender: 'male',
        poin: 9
    },
    {
        name: "Hung",
        gender: 'male',
        poin: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        poin: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        poin: 10
    },
    {
        name: "Long",
        gender: 'male',
        poin: 5
    },
    {
        name: "Luan",
        gender: 'male',
        poin: 10
    },
    {
        name: "Linh",
        gender: 'female',
        poin: 8
    }

];

function findTheAverage(students){
    var total = 0;
    var index = 0;
    for (let i = 0; i < students.length; i++){
        if (students[i].gender === "male"){
            total = total + students[i].poin
            index++;
        }
    }
    console.log(`the average score of the boys: ${total/index}`)
    var total = 0;
    var index = 0;
    for (let i = 0; i < students.length; i++){
        if (students[i].gender === "female"){
            total = total + students[i].poin
            index++;
        }
    }
    console.log(`the average score of the girl: ${total/index}`)

}
findTheAverage(students)