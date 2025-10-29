const students = [
    {
        nume: "Andrei",
        status_examen:"picat"
    },
    {
        nume: "Gigel",
        status_examen:"admis"
    },
    {
        nume: "Ion",
        status_examen:"picat"
    },
    {
        nume: "Vasile",
        status_examen:"admis"
    },
]
function sortArray(array, key) {
  return array.sort((a, b) => {
    if (a[key] < b[key]) {
        return -1;
    }
    if (a[key] > b[key]) {
        return 1;
    }
    return 0;
  });
}

console.log(sortArray(students,"status_examen"));