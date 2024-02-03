import "../../styles/codescreen.css"


export const CodeScreen = () =>{

    const greater = "/>"

    const smaller = "<"

    return(
    <div className="display-container">  
        <div className="code-container">
            <div className="code">        
                <div className="code-face ">

                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line1"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line2"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line3"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line4"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line5"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line6"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line7"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line8"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line9"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line10"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line11"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line12"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line13"></span><h4>{greater}</h4>
                    </div>
                    <div className="line-container">
                        <span className="dot"><h5>{smaller}</h5></span><span className="line" id="line14"></span><h4>{greater}</h4>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
    )
}