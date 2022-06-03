import { Course } from './Course';
import { LearningGroup } from './LearningGroup';

class ITSchool {
    constructor(courseName, description, maxGroup, maxStudentsGroup) {
        this.name = courseName;
        this.description = description;
        this.maxGroup = maxGroup;
        this.maxStudentsGroup = maxStudentsGroup;
        this.availableCourses = [];
        this.startGroups = [];
    };

    registerCourse(courseName, totalLessons, availableTeachersAmount) {
        if(this.maxGroup > 0) {
            if(!this.availableCourses.length) {
                this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
                return;
            };
        };
        const isUsed = this.availableCourses.some(course => course.courseName === courseName);
        if(!isUsed) {
            this.availableCourses.push(new Course(courseName, totalLessons, availableTeachersAmount));
        };
    };

    startLearningGroup(courseName, teacherName, amountOfStudents) {
        if(this.maxGroup > 0 && this.maxStudentsGroup >= amountOfStudents) {
            this.availableCourses.forEach(course => {
                if(course.courseName === courseName && course.availableTeachersAmount !== 0) {
                    this.startedGroups.push(new LearningGroup(courseName, teacherName, amountOfStudents));
                    this.maxGroup-- &&
                    course.availableTeachersAmount--
                };
            });
        } else {alert(`К сожалению, этот курс недоступен`)};
    };

    endLearningGroup(courseName, teacherName) {
        this.startGroups = this.startGroups.filter(group => (group.courseName === courseName && group.teacherName !==teacherName));
        this.maxGroup++
        this.availableCourses.forEach(course => {
            if(course.courseName === courseName) {
                course.availableTeachersAmount++
            };
        });
    };

    getLearningGroupByCourseName(courseName) {
        const groupByCourse = this.startGroups.filter(group => group.courseName === courseName);
        return groupByCourse;
    };
};

console.log(new ITSchool());