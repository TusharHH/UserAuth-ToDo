import { useForm } from 'react-hook-form';
import axios from 'axios';

const SignupForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            const res = await axios.post('http://localhost:6969/api/auth/signup', data);
            console.log(res.data);
        } catch (err) {
            console.error(err.response.data);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register('username')} placeholder="Username" />
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Password" />
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
