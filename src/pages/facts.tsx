import { Sidebar } from '@/components/Sidebar';
import styles from '@/styles/Facts.module.css';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type FactResponse = {
    fact: string;
    length: number;
};

export default function Facts() {
    const { data, isLoading } = useQuery({
        queryKey: ['facts'], 
        queryFn: async () => {
            const response = await axios.get(`https://catfact.ninja/fact`);
            return response.data as FactResponse;
        },  
        initialData: { fact: '', length: 0 }
    }); 

    if (isLoading) {
        return (
            <div className={styles.main}>
                <Sidebar />

                <div className={styles.content}>
                    <p>Loading fact...</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className={styles.main}>
            <Sidebar />

            <div className={styles.content}>
                <h3>Here is an awesome cat fact for you!</h3>
                <p className={styles.catFact}>{data.fact}</p>

                <h3>DNS Server Environment: {process.env.NEXT_PUBLIC_DNS_SERVER}</h3>    
            </div>
        </div>
    )
}