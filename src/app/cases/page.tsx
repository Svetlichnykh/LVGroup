'use client'

import React, {useEffect, useState} from 'react';
import Order from "@/components/order/Order"
import CasesListWrapper from "@/components/cases-list/CasesListWrapper";

const CasesPage = () => {

    useEffect(() => window.document.scrollingElement?.scrollTo(0, 0), [])
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            <div className="cases-container mt-[50px] max-md:mt-[100px]">
                <CasesListWrapper onlyHomePage={false} disableSeeAll={true} />
                <Order nmt={true} />
            </div>
        </>
    );
};

export default CasesPage;