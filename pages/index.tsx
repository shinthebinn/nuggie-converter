export default function Home({ data }) {
    return <p>{data.mcdonalds.name}</p>;
}

export async function getStaticProps(context) {
    const res = await fetch('http://localhost:3000/api/manifest');
    const data = await res.json();

    return {
        props: {
            data
        }
    }
}