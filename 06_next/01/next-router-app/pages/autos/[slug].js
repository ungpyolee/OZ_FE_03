import Auto from '@/components/Auto';
import Header from '@/components/Header';
import { getAllAutos } from '@/utils/autos';

const AutoPage = ({ auto }) => {
    return (
        <div>
            <Header />
            <Auto auto={auto} />
        </div>
    );
};

export async function getStaticPaths() {
    const autos = getAllAutos();
    const paths = autos.map((auto) => ({
        params: { slug: auto.id },
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const autos = getAllAutos();
    const auto = autos.find((auto) => auto.id === params.slug);

    if (!auto) {
        return {
            props: {
                auto: null,
            },
        };
    }

    return {
        props: {
            auto,
        },
    };
}
export default AutoPage;
