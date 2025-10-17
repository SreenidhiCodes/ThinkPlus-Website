import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/courses") // backend URL
      .then((res) => setCourses(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 border hover:shadow-lg"
        >
          <img
            src={course.image}
            alt={course.title}
            className="h-40 w-full object-cover rounded-lg"
          />
          <h3 className="mt-3 text-lg font-semibold">{course.title}</h3>
          <p className="text-gray-600">{course.description}</p>
          <p className="font-bold text-blue-700 mt-2">
            ₹{course.price} | {course.duration}
          </p>
        </div>
      ))}
    </div>
  );
}
