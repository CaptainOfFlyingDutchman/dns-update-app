import { Sidebar } from '@/components/Sidebar';
import styles from '@/styles/Breeds.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { BreedCard } from '../components/BreedCard';

export type BreedsResponse = {
    breed: string;
    country: string;
    origin: string;
    coat: string;
    pattern: string;
}

  
export default function Breeds() {
    const [limitParam, setLimitParam] = useState(0);

    const {get} = useSearchParams()

    const { data, isLoading } = useQuery({
        queryKey: ['breeds'], 
        queryFn: async () => {
            const response = await axios.get(`https://catfact.ninja/breeds?limit=${limitParam}`);
            return response.data.data as Array<BreedsResponse>;
        },  
        initialData: [],
        enabled: !!limitParam
    }); 

    useEffect(() => {
        const limit = get('limit');
        setLimitParam(Number(limit));
    }, [get])


    if (isLoading) {
        return (
            <div className={styles.main}>
                <Sidebar />

                <div className={styles.content}>
                    <p>Loading breeds...</p>
                </div>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <Sidebar />

            <div className={styles.content}>
                <h3>All the breeds</h3>

                <ul className={styles.breedCardsList}>
                    {data.map(breed => 
                        <li key={breed.breed}>
                            <BreedCard breed={breed} />
                        </li>
                    )}  
                </ul>

                <h3>DNS Server Environment: {process.env.NEXT_PUBLIC_DNS_SERVER}</h3>      
            </div>
        </div>
    )
}

