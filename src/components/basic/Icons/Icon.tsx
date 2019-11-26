import React from 'react';

import './Icon.css';

interface IIcon {
    type: "collapse" | "done" | "restart";
}

const Icon: React.FC<IIcon> = ({ type }) => <>
    {
        type === "collapse" && <span className="collapce-icon">
            <svg
                enableBackground="new 0 0 24 24"
                id="Layer_1"
                version="1.0"
                viewBox="0 0 24 24"
            >
                <polyline
                    fill="none"
                    points="3,15.5 12,6.5 21,15.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    strokeWidth="2"
                />
            </svg>
        </span>
    }
    {
        type === "done" && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                fill="none"
                d="M0 0h24v24H0z"
            />
            <path
                d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
            />
        </svg>
    }
    {
        type === "restart" && <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
        >
            <path
                d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c
                -.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
            />
            <path
                d="M0 0h24v24H0z"
                fill="none"
            />
        </svg>
    }
</>

export default Icon;
