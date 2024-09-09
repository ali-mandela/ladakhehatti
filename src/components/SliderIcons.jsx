"use client";

export const NextIcon = ({
    color = "#000",
    size=34,
    onHandle
}) => {
    return (
        <span onClick={onHandle}>
            <svg
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M19 6C19 6 19.5 8 19.5 12C19.5 16 19 18 19 18M5 6C5 6 4.5 8 4.5 12C4.5 16 5 18 5 18C5 18 7 17.5 10.5 15.5C14 13.5 15 12 15 12C15 12 14 10.5 10.5 8.5C7 6.5 5 6 5 6Z"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                </g>
            </svg>
        </span>
    );
};
export const PrevIcon = ({
    color = "#000",
    size = 34,
    onHandle
}) => {
    return (
        <span onClick={onHandle}>
            <svg
                viewBox="0 0 24 24"
                width={size}
                height={size}
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" strokeWidth={0}/>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M5 18C5 18 4.5 16 4.5 12C4.5 8 5 6 5 6M19 18C19 18 19.5 16 19.5 12C19.5 8 19 6 19 6C19 6 17 6.5 13.5 8.5C10 10.5 9 12 9 12C9 12 10 13.5 13.5 15.5C17 17.5 19 18 19 18Z"
                        stroke={color}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"/>
                </g>
            </svg>

        </span>
    );
};