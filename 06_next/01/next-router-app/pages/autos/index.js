import Header from '@/components/Header';
import Link from 'next/link';
import { getAllAutos } from '@/utils/autos';
import styles from '../../styles/Home.module.css';

const Autos = ({ autos }) => {
    return (
        <div>
            <Header />
            <h1>자동차 정보</h1>
            <div className={styles.postsContainer}>
                {autos.map((auto) => (
                    <div key={auto.id} className={styles.auto}>
                        <h2>{auto.name}</h2>
                        <p>{auto.brand}</p>
                        <p>{auto.price}</p>
                        <Link href={`/autos/${auto.id}`}>자세히 보기</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export async function getStaticProps() {
    const autos = getAllAutos();

    return {
        props: {
            autos,
        },
    };
}

export default Autos;
