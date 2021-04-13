// inputs
// controlled vs uncontrolled
// ref
import React, {useState} from "react";
import './App.css';

// controlled
function App() {
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');
    // const [email, setEmail] = useState('');
    // const [age, setAge] = useState('');
    // const [password, setPassword] = useState('');

    // const handleSubmit = () => {
    //     alert(JSON.stringify({
    //         firstName,
    //         lastName,
    //         email,
    //         age,
    //         password,
    //     },null,2))
    // }

    const [userData, setUserData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        age: '',
        password: '',
    })

    const updateUserData = (e) => {
        const {target: {value, name}} = e;

        if(name === 'firstName' && value.split(' ').length > 1){
            setUserData({...userData, [name]: value, lastName:''})
            return;
        }

        if(name === 'age' && Number(value) >= 99){
            console.log(value, typeof value);
            return;
        }
        setUserData({...userData, [name]: value})
    }

    const handleSubmit = () => {
        alert(JSON.stringify(userData,null,2))
        setUserData({
            firstName: '',
            lastName: '',
            email: '',
            age: '',
            password: '',
        })
    }

    return (
        <div className="App">
            <h1>this is input!</h1>
            {/* <input value={firstName} onChange={({target: {value}}) => setFirstName(value)} type="text" name="firstName" placeholder="enter your first name"/>*/}
            {/*<input value={lastName} onChange={({target: {value}}) => setLastName(value)} type="text" name="lastName" placeholder="enter your last name"/>*/}
            {/*<input value={email} onChange={({target: {value}}) => setEmail(value)} type="email" name="email" placeholder="enter your email"/>*/}
            {/*<input value={age} onChange={({target: {value}}) => setAge(value)} type="number" name="age" placeholder="enter your age"/>*/}
            {/*<input value={password} onChange={({target: {value}}) => setPassword(value)} type="password" name="password" placeholder="enter your password"/>*/}

            <input autoComplete='none' value={userData.firstName} onChange={updateUserData} type="text" name="firstName" placeholder="enter your first name"/>
            <br/>
            <br/>
            <input value={userData.lastName} onChange={updateUserData} type="text" name="lastName" placeholder="enter your last name"/>
            <br/>
            <br/>
            <input value={userData.email} onChange={updateUserData} type="email" name="email" placeholder="enter your email"/>
            <br/>
            <br/>
            <input value={userData.age} onChange={updateUserData} type="number" name="age" placeholder="enter your age"/>
            <br/>
            <br/>
            <input value={userData.password} onChange={updateUserData} type="password" name="password" placeholder="enter your password"/>
            <br/>
            <br/>

            {userData.age > 25 ? (
                <h3>you are old</h3>
            ) : (
                <h3>you are old</h3>
            )}

            <button onClick={handleSubmit}>submit</button>
        </div>
    );
}

// uncontrolled
// function App() {
//     const firstName = React.useRef();
//     const lastName = React.useRef();
//     const email = React.useRef();
//     const age = React.useRef();
//     const password = React.useRef();
//     const form = React.useRef();
//
//     // const inputs = React.useRef({
//     //     firstName: React.useRef(),
//     //     lastName: React.useRef(),
//     //     email: React.useRef(),
//     //     age: React.useRef(),
//     //     password: React.useRef(),
//     // })
//
//     const onSubmit = (e) => {
//         e.preventDefault();
//         console.log(e);
//
//         // console.log({firstName});
//         // firstName.current.value = '';
//         // firstName.current.focus();
//         // firstName.current.style.background = 'red';
//
//         // 1
//
//         // const {
//         //     target: [
//         //         {value: firstName},
//         //         {value: lastName},
//         //         {value: email},
//         //         {value: age},
//         //         {value: password}
//         //     ],
//         //     target: {
//         //         elements: {
//         //             firstName,
//         //             lastName,
//         //             email,
//         //             age,
//         //             password,
//         //         }
//         //     }
//         // } = e;
//
//         // console.log(target[0]);
//
//         // console.log({firstName, lastName, email, age, password});
//
//         alert(JSON.stringify({
//             // firstName, lastName, email, age, password
//             firstName: firstName.current.value,
//             lastName: lastName.current.value,
//             email: email.current.value,
//             age: age.current.value,
//             password: password.current.value,
//         }, null, 2))
//
//         // firstName.current.value = '';
//         // lastName.current.value = '';
//         // email.current.value = '';
//         // age.current.value = '';
//         // password.current.value = '';
//         form.current.reset();
//
//     }
//
//     return (
//         <div className="App">
//             <h1>this is input!</h1>
//             {/*<input type="text" placeholder={'hello'} defaultValue="some initial value"/>*/}
//             {/*react input mask*/}
//             <form
//                 ref={form}
//                 onSubmit={onSubmit}>
//                 <input ref={firstName} type="text" name="firstName" placeholder="enter your first name"/>
//                 <br/>
//                 <br/>
//                 <input ref={lastName} type="text" name="lastName" placeholder="enter your last name"/>
//                 <br/>
//                 <br/>
//                 <input ref={email} type="email" name="email" placeholder="enter your email"/>
//                 <br/>
//                 <br/>
//                 <input ref={age} type="number" name="age" placeholder="enter your age"/>
//                 <br/>
//                 <br/>
//                 <input ref={password} type="password" name="password" placeholder="enter your password"/>
//                 <br/>
//                 <br/>
//                 {/*<button onClick={onSubmit}>submit</button>*/}
//                 <button type='submit'>submit</button>
//             </form>
//         </div>
//     );
// }

export default App;
