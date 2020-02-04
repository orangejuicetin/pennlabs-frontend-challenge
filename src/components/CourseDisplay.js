import React from 'react';
import courses from '../data/courses';
import { Course } from './Course';

export const CourseDisplay = () => {
  return (
    <>
      {courses.map(({ dept, number, title, description }) => (
        <Course
          dept={dept}
          number={number}
          title={title}
          description={description}
        />
      ))}
    </>
  );
};
