class App extends React.Component {
    constructor() {
        super();
        this.state = {
            form: 1,
            user: ''
        };
        this.getUser = this.getUser.bind(this)
        this.redirectTwo = this.redirectTwo.bind(this)
        this.redirectThree = this.redirectThree.bind(this)
        this.redirectFour = this.redirectFour.bind(this)
    }

    redirectTwo() {
        this.setState({
            form: 2
        })
    }

    redirectThree() {
        this.setState({
            form: 3
        })
    }

    redirectFour() {
        this.setState({
            form: 4
        })
    }

    getUser(name) {
        this.setState({
            user: name
        })
    }

    render() {
        if (this.state.form === 1) {
            return (< div > <FormOne redirectTwo={this.redirectTwo} getUser={this.getUser} /></div >)
        } else if (this.state.form === 2) {
            return (< div > <FormTwo redirectThree={this.redirectThree} user={this.state.user} /></div >)
        } else if (this.state.form === 3) {
            return (< div><FormThree user={this.state.user} redirectFour={this.redirectFour} /></div>)
        } else if (this.state.form === 4) {
            return (<div><Welcome /></div>)
        }

    }
}

class FormOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            email: '',
            user_password: ''
        };
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler(user, email, password) {
        axios.post('/signup', {
            user: user,
            email: email,
            user_password: password
        }).then((response) => {
            var parsed = JSON.parse(response.config.data)
            console.log(parsed.user)
            this.props.getUser(parsed.user)
        })
    }

    render() {
        return (
            <div>
                <div><h3>Signup!!</h3></div><br></br>
                <form>
                    NAME <input type="text" name="user" onChange={(e) => { this.handleInputChange(e) }} value={this.state.user}></input><br />
                    E-MAIL <input type="text" name="email" onChange={(e) => { this.handleInputChange(e) }} value={this.state.email}></input><br />
                    PASSWORD <input type="text" name="user_password" onChange={(e) => { this.handleInputChange(e) }} value={this.state.user_password}></input><br />
                    <input type="submit" value="Submit" onClick={() => { this.submitHandler(this.state.user, this.state.email, this.state.user_password); this.props.redirectTwo() }}></input>
                </form>
            </div>
        )
    }
}

class FormTwo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            line_1: '',
            line_2: '',
            city: '',
            user_state: '',
            zip: '',
            phone: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler(line1, line2, city, state, zip, phone) {
        axios.post(`/shipping/${this.props.user}`, {
            line_1: line1,
            line_2: line2,
            city: city,
            user_state: state,
            zip: zip,
            phone: phone
        }).then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <div>Shipping Address</div> <br />
                        Address 1 <input type="text" name="line_1" onChange={(e) => { this.handleInputChange(e) }} value={this.state.line_1}></input><br />
                        Address 2 <input type="text" name="line_2" onChange={(e) => { this.handleInputChange(e) }} value={this.state.line_2}></input><br />
                        City <input type="text" name="city" onChange={(e) => { this.handleInputChange(e) }} value={this.state.city}></input><br />
                        State <input type="text" name="user_state" onChange={(e) => { this.handleInputChange(e) }} value={this.state.user_state}></input><br />
                        Zip <input type="text" name="zip" onChange={(e) => { this.handleInputChange(e) }} value={this.state.zip}></input><br />
                        Phone# <input type="text" name="phone" onChange={(e) => { this.handleInputChange(e) }} value={this.state.phone}></input><br />
                        <input type="submit" value="Submit" onClick={() => { this.submitHandler(this.state.line_1, this.state.line_2, this.state.city, this.state.user_state, this.state.zip, this.state.phone); this.props.redirectThree() }} />
                    </form>
                </div>
            </div>
        )
    }
}

class FormThree extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            credit_card: '',
            expire_date: '',
            cvv: '',
            billing_zip: ''
        }
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler(card, expire, cvv, zip) {
        axios.post(`/card/${this.props.user}`, {
            credit_card: card,
            expire_date: expire,
            cvv: cvv,
            billing_zip: zip
        }).then((response) => {
            console.log(response);
        })
    }

    render() {
        return (
            <div>
                <div>
                    <form>
                        <div>Credit Card Information</div> <br />
                        Credit Card Number <input type="text" name="credit_card" onChange={(e) => { this.handleInputChange(e) }} value={this.state.credit_card}></input><br />
                        Expire Date <input type="text" name="expire_date" onChange={(e) => { this.handleInputChange(e) }} value={this.state.expire_date}></input><br />
                        CVV <input type="text" name="cvv" onChange={(e) => { this.handleInputChange(e) }} value={this.state.cvv}></input><br />
                        Billing Zip <input type="text" name="billing_zip" onChange={(e) => { this.handleInputChange(e) }} value={this.state.billing_zip}></input><br />
                        <input type="submit" value="Submit" onClick={() => { this.submitHandler(this.state.credit_card, this.state.expire_date, this.state.cvv, this.state.billing_zip); this.props.redirectFour() }} />
                    </form>
                </div>
            </div>
        )
    }
}

function Welcome() {
    return (
        <div>Welcome!!!</div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))