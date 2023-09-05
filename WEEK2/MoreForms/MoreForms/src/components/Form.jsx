import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
    const {
        handleSubmit,
        register,
        formState: { errors }
    } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit((data) => console.log(data))}>
                <div>
                    <input
                        type="text"
                        {...register("username", {
                            required: "Username is required",
                            minLength: {
                                value: 3,
                                message: "Minimum length is 3 characters"
                            },
                            maxLength: {
                                value: 15,
                                message: "Maximum length is 15 characters"
                            }
                        })}
                        placeholder="Username"
                    />
                    <div>
                        {errors.username && <span>{errors.username.message}</span>}
                    </div>
                </div>
                <div>
                    <input
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/,
                                message: "Invalid email format"
                            }
                        })}
                        placeholder="Email"
                    />
                    <div>
                        {errors.email && <span>{errors.email.message}</span>}
                    </div>
                </div>
                <div>
                    <input
                        type="password"
                        {...register("password", { required: "Password is required" })}
                        placeholder="Password"
                    />
                    <div>
                        {errors.password && <span>{errors.password.message}</span>}
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
export default Form;
