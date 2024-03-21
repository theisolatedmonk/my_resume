import React from 'react';

type Props = {}

const experience = [
    {
        year: "2023 - Present",
        title: "RITES Ltd",
        details: "Description of experience..."
    },
    {
        year: "2020,Dec - 2023",
        title: "",
        details: "Description of experience..."
    },
    {
        year: "2023 - Present",
        title: "RITES Ltd",
        details: "Description of experience..."
    },
    // Other experiences...
];

const education = [
    {
        year: "2007 - 2008",
        title: "MIET COLLEGE MEERUT",
        details: "Description of education..."
    },
    {
        year: "2022 - 2023",
        title: "MIET COLLEGE MEERUT",
        details: "Description of experience..."
    },
    {
        year: "2022 - 2023",
        title: "MIET COLLEGE MEERUT",
        details: "Description of experience..."
    },
    // Other education entries...
];

export default function Experience({ }: Props) {
    return (
        <div className='flex flex-col md:flex-row justify-center md:space-x-4'>
            <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2">EXPERIENCE</h3>
                <div className="flex flex-col space-y-4 border-orange-400 border-l-2">
                    {experience.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-1 bg-orange-400"></div>
                                <p className="w-32 p-2 border border-orange-400 text-sm">{item.year}</p>
                            </div>
                            <h4 className='font-bold'>{item.title}</h4>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex-1 mt-4 md:mt-0">
                <h3 className="text-lg font-semibold mb-2">EDUCATION</h3>
                <div className="flex flex-col space-y-4 border-orange-400 border-l-2">
                    {education.map((item, index) => (
                        <div key={index} className="flex flex-col">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-1 bg-orange-400"></div>
                                <p className="w-32 text-sm p-2 border border-orange-400">{item.year}</p>
                            </div>
                            <h4 className='font-bold'>{item.title}</h4>
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
