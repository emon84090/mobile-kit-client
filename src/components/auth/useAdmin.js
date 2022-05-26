
import React, { useEffect, useState } from 'react';

const useAdmin = (user) => {
    const [admin, setAdmin] = useState(false);
    const [aloading, setAdminloading] = useState(true)

    useEffect(() => {
        const email = user?.email;
        if (email) {
            const getAdmindata = async () => {
                try {
                    const data = await fetch(`https://floating-eyrie-91956.herokuapp.com/admin/${email}`, {
                        method: "GET",
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `bearer ${localStorage.getItem('accesstoken')}`
                        }
                    });

                    const jsonData = await data.json();
                    setAdmin(jsonData.admin);
                    setAdminloading(false)

                } catch (err) {
                    console.log(err);
                }

            }
            getAdmindata();


        }

    }, [user])

    return [admin, aloading]

};

export default useAdmin;