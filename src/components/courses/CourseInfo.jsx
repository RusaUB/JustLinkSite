import React, { useEffect, useState } from "react";
import { database as db } from "../../firebase";
import { ref, onValue } from "firebase/database";
import { useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function CourseInfo() {
  const params = useParams();
  const currentUser = useAuth();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    if (currentUser) {
      const courseTitle = params.route; // Assuming your route parameter is named "slugifiedTitle"
      const eventRef = ref(db, "courses"); // Reference to the "courses" node

      // Fetch the course data that matches the slugified title
      const unsubscribeEvents = onValue(eventRef, (snapshot) => {
        const courses = snapshot.val();
        const matchingCourse = Object.values(courses).find(
          (course) => course.route === courseTitle
        );
        setCourseData(matchingCourse);
      });

      return () => {
        unsubscribeEvents();
      };
    }
  }, [currentUser, params]);


  return (
    <div>
      {courseData ? (
        <div>
          <h1>{courseData.title}</h1>
          {/* Add more details from courseData as needed */}
        </div>
      ) : (
        <p>Loading course data...</p>
      )}
    </div>
  );
}

export default CourseInfo;
