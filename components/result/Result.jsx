"use client";
import { useUser } from "@clerk/nextjs";
import { useQuery } from '@tanstack/react-query';
import { getUserItem } from '@/lib/api';
import ItemList from "./ItemList";
import LoadingComponent from '@/components/LoadingSkeleton';

function Result() {
    const { user, isLoaded } = useUser();
    const email = user?.emailAddresses[0]?.emailAddress;
    const { isLoading, error, data } = useQuery({
        queryKey: ['result', email],
        queryFn: () => getUserItem(email), 
    });

    if (isLoading || !isLoaded) {
        return <div className="w-1/2"><LoadingComponent /></div>;
    }  

    if (error) {
        return <div className="text-red-500">Error: Unable to load data.</div>;
    }

    if (!data || Object.keys(data).length === 0) {
        return <div className="text-center mt-4">You haven&apos;t bid for any item yet.</div>;
    }

    return (
        <div>
            <ItemList items={data} />
        </div>
    );
}

export default Result;
