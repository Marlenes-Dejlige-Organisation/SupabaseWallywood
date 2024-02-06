import axios from "axios";
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"
import { useLogin } from "../../components/LoginProvider/LoginProvider"
import { useForm } from "react-hook-form";
import styles from "../Login/Login.module.scss"

export const Login = () => {
    const { loginData, setLoginData } = useLogin();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const MarlenesSubmitHandler = async data => {
        const endpoint = 'http://localhost:3000/login';
        try {
            const result = await axios.post(endpoint, data); // Fix: Pass 'data' as the second argument
            sessionStorage.setItem('access_token', JSON.stringify(result.data))
            setLoginData(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    const LogOut = () => {
        sessionStorage.removeItem('access_token')
        setLoginData()
    }

    return (
        <ContentWrapper title="Login">
          {!loginData ? (
            // Vis login-formularen, hvis brugeren ikke er logget ind.
            <form method="POST" onSubmit={handleSubmit(MarlenesSubmitHandler)}>
              <div>
                <label htmlFor="username">Email:</label>
                <input type="email" id="username" {...register('username', { required: true })} />
                {errors.username && <span className={styles.message}>Bruger-email skal udfyldes</span>}
              </div>
              <div>
                <label htmlFor="password">Adgangskode:</label>
                <input type="password" id="password" {...register('password', { required: true })} />
                {errors.password && <span className={styles.message}> Password skal udfyldes</span>}
              </div>
              <div>
                <button>Login</button>
              </div>
            </form>
          ) : (
            // Hvis brugeren er logget ind og der er navne, vis en velkomstbesked og en logud-knap.
            <div>
              {loginData.user && loginData.user.firstname && loginData.user.lastname ? (
                <h2>Du er logget ind som {`${loginData.user.firstname} ${loginData.user.lastname}`}</h2>
              ) : (
                <h2>Du er logget ind</h2>
              )}
              <button onClick={() => LogOut()}>Log ud</button>
            </div>
          )}
        </ContentWrapper>
      );
      
      
};
