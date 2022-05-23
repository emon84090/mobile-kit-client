import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(() => {
        const email = user?.user?.email;
        if (email) {

            const userdata = {
                name: user?.user?.displayName,
                photo: user?.user?.photoURL
            }

            const postData = async () => {
                const { data } = await axios.put(`http://localhost:5000/user/${email}`, userdata);

                localStorage.setItem('accesstoken', data.accesstoken);
                setToken(data.accesstoken);
            }
            postData();
        }
    }, [user])


    return [token];
};

export default useToken;