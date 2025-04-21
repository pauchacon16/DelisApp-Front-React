"use client"
import { useAuthFetch } from "@/src/hooks/useAuthFetch";
import { useLoading } from "@/src/hooks/useLoading";
import { Usuario } from "@/src/interfaces";
import Link from "next/link";
import { useForm } from "react-hook-form";

function RegisterPage(){
    const { finishLoading, isLoading, startLoading } = useLoading();
    const authFetch = useAuthFetch();
    const { register, watch, handleSubmit, formState: {errors} } = useForm<Usuario>();

    const onSubmit = async (data: Usuario) => {
        startLoading();
        await authFetch({
            endpoint: 'register',
            redirectRoute: '/home',
            formData: data
        });
        finishLoading();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="form">
            <h1 className="text-[#32363C] font-bold text-4xl mb-4">Registrate</h1>
            <label htmlFor="username" className="text-[#32363C] mb-2 block text-sm ">Nombres</label>
            <input type="text"
                placeholder="Tu nombre"
                className="p-3 rounded block mb-2 bg-white text-[#32363C] w-full"
                {...(register("username", {
                    required: {
                        value: true,
                        message: "El nombre es requerido"
                    }
                }))} 
            />
            {
                errors.username  && (
                    <span className="text-red-500 text-sm">
                        {errors.username.message}
                    </span>
                )
            }
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
            <label htmlFor="phone" className="text-[#32363C] mb-2 block text-sm ">Teléfono</label>
            <input type="text" 
                placeholder="Tu teléfono"
                className="p-3 rounded block mb-2 bg-white text-[#32363C] w-full"
                {...(register("phone", {
                    required: {
                        value: true,
                        message: "El teléfono es requerido"
                    }
                }))}
            />
            {
                errors.phone  && (
                    <span className="text-red-500 text-sm">
                        {errors.phone.message}
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
            <label htmlFor="confirmPassword" className="text-[#32363C] mb-2 block text-sm ">Repite la contraseña</label>
            <input type="password" 
                placeholder="Confirma tu contraseña"
                className="p-3 rounded block mb-2 bg-white text-[#32363C] w-full"
                {...(register("confirmPassword", {required: true, 
                    validate: (val: string) => {
                        if (watch('password') != val) {
                            return "Las contraseñas no coinciden";
                        }
                    }
                }))}
            />
            {
                errors.confirmPassword  && (
                    <span className="text-red-500 text-sm">
                        {errors.confirmPassword.message}
                    </span>
                )
            }
            <button className="submitButton" disabled={isLoading}>
                {isLoading ? <div style={{ width: 25, height: 25 }} className="spinner"></div> : "Registrar"}
            </button>

            <div className='w-full flex justify-center mt-3'>
                <span className='text-[12px]'>
                    ¿Ya tienes cuenta? <Link href={'/'} className='font-bold'>Inicia Sesión</Link>
                </span>
            </div>
        </form>
    )
}
export default RegisterPage