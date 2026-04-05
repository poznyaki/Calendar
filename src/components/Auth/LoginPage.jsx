import style from './Auth.module.scss'
import { useForm } from 'react-hook-form';

function LoginPage() {
  const {
      register,
      handleSubmit,
      formState: { errors },
  } = useForm();
  return (
    <div className={style.wrapper}>
        <h1>Login</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label htmlFor="email">Email</label>
            <input 
              type="email"
              id="email" 
              {...register("email", {
                required: true,
                pattern : {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email format"
                }
              })}
            />
            <span>{errors.email?.message}</span>
            <br />

            <label htmlFor="password">Password</label>
            <input 
              type="password"
              id="password"
              {...register("password",
                  {
                    required: true,
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must be less than 20 characters long",
                    },
                    pattern : {
                      value: /^[a-zA-Z0-9]+$/,
                      message : "Password must be only letters and numbers"
                    }
                  })
                }
             />
            <span>{errors.password?.message}</span>
            <br />
            <br />
            <button className={style.button}>Login</button>
        </form>
    </div>
  )
}
export default LoginPage;