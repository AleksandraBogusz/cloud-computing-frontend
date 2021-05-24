import { useState, useEffect } from 'react';
import styles from './HomePage.module.css';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import Image from '../Image';

const HomePage = (props) => {
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [data, setData] = useState([]);

    const fetchImages = async () => {
        const url = `${process.env.REACT_APP_BACKEND_SERVICE}/upload-service/search?page=${page}&size=10`;
        const token = localStorage.getItem('_secret');
        const options = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await axios.get(url, options);

        if (response.status !== 200) {
            setHasMore(false);
            setData([]);
        }

        if (response.data !== []) {
            const _data = [...data, ...response.data];
            setData(_data);
            setPage(page + 1);
        } else {
            hasMore(false);
        }
    }

    useEffect(() => {
        const fun = async () => await fetchImages();
        fun();
    }, []);

    return (
        <div id="scrollable" className={styles['scrollable']}>
            <InfiniteScroll
                className={styles['main']}
                dataLength={data.length}
                next={fetchImages}
                hasMore={hasMore}
                scrollableTarget="scrollable"
            >
                {data.map(d => <Image key={d.id} src={d.url} />)}
            </InfiniteScroll>
        </div>
    );
}

export default HomePage;