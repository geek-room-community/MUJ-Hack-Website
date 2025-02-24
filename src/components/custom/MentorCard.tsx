import React from 'react';

const MentorCard: React.FC = () => {
    return (
        <div className="bg-blue-100 p-8 rounded-lg shadow-lg mx-auto max-w-2xl my-[30rem]">
          <h1 className="text-3xl text-green-800 font-semibold mb-4">MentorCard</h1>
          <p className="text-green-700 text-lg leading-relaxed">
            Here we outline the key problems we aim to solve through our efforts...
          </p>
        </div>
    );
};

export default MentorCard;