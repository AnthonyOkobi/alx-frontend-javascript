export default function updateStudentGradeByCity(A, B, C) {
    const arr = A.filter((a) => {
        if (a.location === B) {
            return a;
        }
    });

    const result = arr.map((data) => {
        var grade;
        const D = C.filter((d) => data.id === d.studentId);
        const E = D.map((e) => e.grade)[0];
        grade = E || 'N/A';
        return {...data, grade};
    })
    return result;
}
