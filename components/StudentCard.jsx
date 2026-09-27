'use client';
import { useState } from 'react';

export default function StudentCard({ name, course, year }) {
  const [message, setMessage] = useState('Hello, Student!');

  return (
    <div className="p-8 bg-white border-4 border-red-600 rounded-3xl max-w-sm mx-auto">
      <p className="text-center font-semibold mb-4">STUDENT CARD</p>
      <p className="font-bold text-lg">{name}</p>
      <p>{course}</p>
      <p className="mb-4">{year}</p>
      
      <div className="text-center mb-4">
        <button
          onClick={() => setMessage('Welcome to Next.js!')}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Click Me
        </button>
      </div>
      
      <p className="text-center">{message}</p>
    </div>
  );
}