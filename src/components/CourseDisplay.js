import React from 'react';
import courses from '../data/courses';
import { Course } from './Course';

export const CourseDisplay = () => {
  return (
    <>
      {courses.map(({ dept, number, title, description, prereqs }) => (
        <Course
          dept={dept}
          number={number}
          title={title}
          description={description}
          prereqs={prereqs}
        />
      ))}
    </>
  );
};
