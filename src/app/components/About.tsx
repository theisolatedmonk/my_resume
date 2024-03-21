import React from 'react'
import Image from 'next/image'

type Props = {}

const informationDetails = [
    {
        title: "Name",
        detail: "Rahul"
    },
    {
        title: "Job",
        detail: "Engineer"
    },
    {
        title: "Phone",
        detail: "+91-7017877815"
    },
    {
        title: "E-mail",
        detail: "96rahulseth@gmail.com"
    }
];

export default function About({ }: Props) {
    return (
        <div className='w-full flex-col justify-center flex bg-green-300 items-center'>
            <div className="flex flex-col sm:flex-row items-center">
                <Image src={'/profile-icon.jpg'} alt={''} width={50} height={50} className='rounded-full' />
                <p className=" text-wrap text-center">oihewfoi;bw;oegrg;bwra;gbob;ovb
                    wegfwaieobarugbiurbg. iubeiufbAAkjbfbkjbfvk jnknn birbbbgrkbkgrbkjbrbakre</p>
            </div>
            <div className="flex items-center justify-center">
                <div className="flex flex-col items-center sm:flex-row sm:flex-wrap ">
                    {informationDetails.map((item, index) => (
                        <div key={index} className="flex  mr-4">
                            <p className="">{item.title} :</p>
                            <p className="">{item.detail}</p>
                        </div>
                    ))}
                </div>

            </div>
            <button className=' w-28 h-12 bg-amber-300 text-sm'>Download CV</button>
        </div>
    )
}
