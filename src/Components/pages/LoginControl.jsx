import React from "react";

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isloggedIn: false
        };

        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isloggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isloggedIn: false});
    }

    render() {
        const {isloggedIn} = this.state;
        const buttonType = isloggedIn ? "logout-btn" : "login-btn";
        const buttonText = isloggedIn ? "로그아웃" : "로그인";
        const handleClick = isloggedIn ? this.handleLogoutClick : this.handleLoginClick;

        return(
            <div>
                <p style={{color: "white"}}>
                    <button style={{borderRadius: "15px", border: "0px", marginRight: "10px", padding: "3px", paddingLeft: "10px", paddingRight: "10px"}} 
                    className={buttonType} onClick={handleClick}>{buttonText}</button>
                    {isloggedIn ? '환영합니다!' : '로그인 해주세요!'}
                </p>
            </div>
        );
    };
}


export default LoginControl;