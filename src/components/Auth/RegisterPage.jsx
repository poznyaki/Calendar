import style from './Auth.module.scss'
import { useForm } from 'react-hook-form';

function RegisterPage(props) {
  const {
      register,
      handleSubmit,
      formState: { errors },
      watch,
  } = useForm();

  return (
    <div className={style.wrapper}>
        <h1>Register</h1>
        <form onSubmit={handleSubmit((data) => console.log(data))}>
            <label htmlFor="login">Login</label>
            <input 
                type="text" 
                id="login" 
                {...register("login",
                  {
                    required: true,
                    minLength: {
                      value: 3,
                      message: "Login must be at least 3 characters long",
                    },
                    maxLength: {
                      value: 20,
                      message: "Login must be less than 20 characters long",
                    },
                    pattern : {
                      value: /^[a-zA-Z0-9]+$/,
                      message : "Login must be only letters and numbers"
                    }
                  })
                }
                
            />
            <span>{errors.login?.message}</span>
            <br />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
            <span></span>
            <br />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
            <span></span>
            <br />

            <label htmlFor="confirmPassword">Confirm password</label>
            <input type="password" id="confirmPassword" />
            <span></span>
            <br />
            <button className={style.button}>Register</button>
        </form>
    </div>
  )
}

RegisterPage.PropTypes = {};

export default RegisterPage;