
function Header(){
    return(
        <nav style={{height:"50px",width:"1500px",display:"flex",backgroundColor:"#eeebec",justifyContent:"space-around",padding:"41px 10px 27px",gap:"0px",fontFamily:"revert-layer",fontSize:"larger"
}}>
            <div>
            <img src="https://sample-website-pi.vercel.app/images/logo.png"/>
            </div>
            <div >
            <ol style={{display:"flex",listStyleType:"none",gap:"50px"}}>
                <li style={{color:"red"}}>HOME</li>
                <li>ABOUT</li>
                <li>BLOG</li>
                <li>CONTACTS</li>
            </ol>
            </div>
        </nav>
    )
}
export default Header;