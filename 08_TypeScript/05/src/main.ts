// Typescript modules

// import add from './utils';

import { log as Logger, appName, User } from './utils';

// 타입 불러오기
import { Student, StudentProfile } from './student';

console.log(appName);

const user = new User('John');

Logger(user.getName());

const student: Student = {
    id: 123,
    name: 'Jess',
    age: 18,
};
function createStudentProfile(profile: StudentProfile) {
    console.log(`${profile.studentId}, ${profile.photoUrl}`);
}

createStudentProfile({
    studentId: student.id,
    photoUrl: 'https://somephotourl.png',
});
