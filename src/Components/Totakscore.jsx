import styled from 'styled-components'




const Totakscore = ({ score }) => {
    return (
        < >
            <ScoreContainer>
                <h1>{score}</h1>
                <p>Total Score</p>
            </ScoreContainer>

        </>
    )
}

export default Totakscore;

const ScoreContainer = styled.div`
max-width: 200px;
text-align: center;
h1{
    font-size: 100px;
    line-height: 100px;

}
p{
    font-size: 24px;
    font-weight: 500;
}


`;
