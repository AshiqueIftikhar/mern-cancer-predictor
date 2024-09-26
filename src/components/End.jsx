import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {Button} from './Button'

const Points = styled.p`
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 2em;
`;
const End = ({res}) => {
    const [showContent, setShowContent] = useState(false);
    const refreshPage = () => window.location.reload();

    useEffect(() => {
        // Set a timeout to delay the rendering of the content
        const timer = setTimeout(() => {
            setShowContent(true);
        }, 3000); // Delay for 3 seconds (3000 ms)

        // Cleanup timer if the component unmounts before the delay ends
        return () => clearTimeout(timer);
        }, []);

    return (
        <>
        {showContent ? (
            <>
            <img
                src="https://cdn-icons-png.flaticon.com/512/3534/3534063.png"
                alt=""
                width="100px"
            />
            <Points>
                Your risk of cancer is <span style={{ fontSize: '48px' }}>{res}%</span>
            </Points>
            <Button onClick={refreshPage}>Check Again</Button>
            </>
        ) : (
            <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignItems:'center'}}>
                {/* <h3>End of Questions</h3> */}
                <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExejdpNnZ3OTVqdHg0bGxmMjIxZXdtemM1b2QxdWoxYjk3Mm1ydXd6MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/4VAZHbrhR8nM1Aesq7/giphy.webp" alt="" width="150px" style={{borderRadius:"30px"}}/>
                <h2>Analyzing your answers...</h2>
            </div> 
        )}
        </>
    )
}

export default End