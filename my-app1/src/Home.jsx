import Button, { Link,Span } from "./compnents";
import './Home.css'


function Home() {
    return (
        <>
            <h1>This is my Home Component.</h1>
            {/* <h1 style={{'color':'red'}}>This is my Home Component.</h1> */}
            <Button></Button>
            <Link />
            <Span/>
        </>
    )
}

export default Home;