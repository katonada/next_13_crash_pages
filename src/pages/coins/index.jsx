import Image from 'next/image';
import axios from 'axios';

const coinList = ({coinData}) => {

    console.log({coinData});

    return (
        <div>
            <h1>Coin List</h1>
            {
                coinData.coins.map(coin => {
                    return (
                        <div key={coin.id}>
                            <h2>{coin.name}</h2>
                            <Image src={coin.icon} alt={coin.name} width={50} height={50}/>
                            <p>{coin.price}</p>
                        </div>
                    );
                })
            }
        </div>
    );
};

// export const getStaticProps = async ({params}) => {
export const getServerSideProps = async ({params}) => {
    const id = params?.id;
    const data = await axios.get('https://api.coinstats.app/public/v1/coins?skip=0');

    return {
        props: {
            coinData: data.data
        }
    };
};

export default coinList;
