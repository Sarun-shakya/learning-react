import React, { useEffect, useState } from "react";

function Github(){
    const [data, setData] = useState({})
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
    return(
        <div className="text-center text-3xl">
            GIthub Followers: {data.followers}
            <img src={data.avatar_url} alt="avatar" />
        </div>
    )
}

export default Github