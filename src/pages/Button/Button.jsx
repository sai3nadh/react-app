function Button(){
    const styles = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        }

    const handleClick = () => alert("clicked");
    const handleClick2 = (e) => console.log(e);
    return(
        <>
            <button style={styles}
                    onClick={handleClick}> 
                Button-test
            </button>

            <button style={styles}
                    onClick={handleClick2}> 
                Button-event
            </button>
        </>
    );
}

export default Button