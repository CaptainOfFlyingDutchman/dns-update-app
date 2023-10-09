import styles from '@/styles/Breeds.module.css';
import { BreedsResponse } from '../pages/breeds';

export function BreedCard({ breed }: { breed: BreedsResponse; }) {
    return (
        <div className={styles.breedCard}>
            <p className={styles.breedName}>{breed.breed}</p>
            <div className={styles.breedDetails}>
                <p>Coat: {breed.coat}</p>
                <p>Country: {breed.country}</p>
                <p>Origin: {breed.origin}</p>
                <p>Pattern: {breed.pattern}</p>
            </div>
        </div>
    );
}
