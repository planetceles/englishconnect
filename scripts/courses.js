import { courses } from "../data/courses.mjs";

const courseContainer = document.querySelector("#courses");

const displayCourses = (courses) => {
    courses.forEach((course) => {
        let courseCard = document.createElement("section");
        let courseName = document.createElement("h3");
        let courseDescription = document.createElement("p");
        let courseStatus = document.createElement("p");
        let courseDates = document.createElement("p");
        let courseAgeRange = document.createElement("p");
        let courseRegistrationLink = document.createElement("p");
        courseRegistrationLink.classList.add("register-link");
        courseCard.classList.add("course-card");

        courseName.textContent = `${course.name}`;
        courseDescription.textContent = `${course.description}`;
        courseStatus.textContent = `Status: ${course.status}`;
        courseDates.textContent = `Dates: ${course.startDate} - ${course.endDate}`;
        courseAgeRange.textContent = `Age Range: ${course.ageRange}`;
        courseRegistrationLink.innerHTML = `<a href="${course.registrationLink}" target="_blank">Join Class</a>`;

        courseCard.appendChild(courseName);
        courseCard.appendChild(courseDescription);
        courseCard.appendChild(courseStatus);
        courseCard.appendChild(courseDates);
        courseCard.appendChild(courseAgeRange);
        courseCard.appendChild(courseRegistrationLink);

        courseContainer.appendChild(courseCard);
    });

}
displayCourses(courses);