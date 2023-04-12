import Link from 'next/link';
import React from 'react';

const NewsPage = () => {
    return (
        <>
            <h1>the News Page</h1>
            <ul>
                <li><Link href='/news/1'>This is 1</Link></li>
                <li><Link href='/news/2'>This is 2</Link></li>
            </ul>
        </>
    );
};

export default NewsPage;