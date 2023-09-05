import { useForm } from "react-hook-form";

export const Form = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(console.log)}>
                <div>
                    <input
                        type="text"
                        {...register("username", {
                            required: "Username is required",
                            minLength: 3,
                            maxLength: 15
                        })}
                        placeholder="azazza azazaz"
                    />
                    <div>
                        {errors.username.type == "required" && <small style={{ color: "red" }}>Username is required</small>}
                        {errors.username.type == "minLength" && <small style={{ color: "red" }}>Minimum length 3</small>}
                        {errors.username.type == "maxLength" && <small style={{ color: "red" }}>Maximum length 15</small>}
                    </div>
                </div>
                <div>
                    <input type="email" {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} />
                    <div>
                        {errors.email.type == "required" && <small style={{ color: "red" }}>Email is required</small>}
                        {errors.email.type == "pattern" && <small style={{ color: "red" }}>Wrong format</small>}
                    </div>
                </div>
                <div>
                    <input
                        type="password"
                        {...register("password", { required: true })}
                    />
                    <div>
                        <small style={{ color: "red" }}>{errors.password.message}</small>
                    </div>
                </div>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};
export default Form