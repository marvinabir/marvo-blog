const Home = () => {

    const handleClick = () => {
        console.log("hello Weebs!");
    }

    const handleClickAgain = (name) => {
        console.log("hello" + name);
    }
     
    return ( 
        <div className="links">
            <h2>Homepage</h2>
            <button onClick={handleClick}>click</button>
            <button onClick={handleClickAgain}>click</button>
        </div>    
     );
}
 
export default Home;
