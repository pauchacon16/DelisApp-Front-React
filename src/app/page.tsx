'use client'
import { useAuthFetch } from "@/src/hooks/useAuthFetch";
import { useLoading } from "@/src/hooks/useLoading";
import { Usuario } from "@/src/interfaces";
import Link from "next/link";
import { useForm } from "react-hook-form";

function LoginPage(){
    const { finishLoading, isLoading, startLoading } = useLoading();
    const authFetch = useAuthFetch();
    const { register, handleSubmit, formState: {errors} } = useForm<Usuario>();

    const onSubmit = async (data: Usuario) => {
        startLoading();
        await authFetch({
            endpoint: 'login',
            redirectRoute: '/home',
            formData: data
        });
        finishLoading();
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)} >
                <div className="descriptionContainer">
                    <h2>Iniciar Sesión</h2>
                </div>
                <div className="my-[10px] flex flex-col gap-4">
                    <label htmlFor="email" className="text-[#32363C] mb-2 block text-sm ">Correo Electrónico</label>
                    <input type="email" 
                        placeholder="Tu correo electrónico"
                        className="p-3 rounded block mb-2 bg-white text-[#32363C] w-full"
                        {...(register("email", {
                            required: {
                                value: true,
                                message: "El correo electrónico es requerido"
                            },
                            pattern: {
                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                message: 'Ingrese un correo electrónico válido',
                            },
                        }))} 
                    />
                    {
                        errors.email  && (
                            <span className="text-red-500 text-sm">
                                {errors.email.message}
                            </span>
                        )
                    }

                    <label htmlFor="password" className="text-[#32363C] mb-2 block text-sm ">Contraseña</label>
                    <input type="password" 
                        placeholder="Contraseña"
                        className="p-3 rounded block mb-2 bg-white text-[#32363C] w-full"
                        {...(register("password", {
                            required: {
                                value: true,
                                message: "La contraseña es requerida"
                            }
                        }))}
                    />
                    {
                        errors.password  && (
                            <span className="text-red-500 text-sm">
                                {errors.password.message}
                            </span>
                        )
                    }

                    <button className="submitButton" disabled={isLoading}>
                        {isLoading ? <div style={{ width: 25, height: 25 }} className="spinner"></div> : "Iniciar Sesión"}
                    </button>

                    <div className='w-full flex justify-center mt-3'>
                        <span className='text-[12px]'>
                            ¿Aún no tienes cuenta? <Link href={'/auth/register'} className='font-bold'>Registrate</Link>
                        </span>
                    </div>
                </div>
            </form>
        </>
    )
}
export default LoginPage