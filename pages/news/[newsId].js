import { useRouter } from 'next/router';
import React from 'react';

const DetailPage = () => {
    const router = useRouter();
    const newsId = router.query.newsId;
    console.log(newsId);
    return (
        <h1>the Detail Page</h1>
    );
};

export default DetailPage;