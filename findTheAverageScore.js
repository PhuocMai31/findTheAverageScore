let students = [
    {
        name: "Ha",
        gender: 'female',
        point: 8
    },
    {
        name: "Huy",
        gender: 'male',
        point: 9
    },
    {
        name: "Hung",
        gender: 'male',
        point: 7
    },
    {
        name: "Phuong",
        gender: 'female',
        point: 6
    },
    {
        name: "Huyen",
        gender: 'female',
        point: 10
    },
    {
        name: "Long",
        gender: 'male',
        point: 5
    },
    {
        name: "Luan",
        gender: 'male',
        point: 10
    },
    {
        name: "Linh",
        gender: 'female',
        point: 8
    }

];

function findTheAverage(students){
    var total = 0;
    var count = 0;
    for (let i = 0; i < students.length; i++){
        if (students[i].gender === "male"){
            total = total + students[i].point
            count++;
        }
    }
    console.log(`the average score of the boys: ${total/count}`)
    var total = 0;
    var count = 0;
    for (let i = 0; i < students.length; i++){
        if (students[i].gender === "female"){
            total = total + students[i].point
            count++;
        }
    }
    console.log(`the average score of the girl: ${total/count}`)

}
findTheAverage(students)