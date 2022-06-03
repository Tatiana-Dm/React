import { Lesson } from './Lesson';

export class LearningGroup {
    constructor(courseName, teacherName, amountOfStudents) {
        this.courseName = courseName;
        this.teacherName = teacherName;
        this.amountOfStudents = amountOfStudents;
        this.passedLessons = [];
    };

    doneLesson(title, topics) {
        this.passedLessons.length > 0 ? this.lessonCheck(title, topics) : this.passedLessons.puch(new Lesson(title, topics));
    };

    lessonCheck(title, topics) {
        this.passedLessons.forEach(lesson => {
            if(lesson.title !== title) {
                this.passedLessons.puch(new Lesson(title, topics))
            } else {alert(`Урок окончен`)};
        });
    };
};