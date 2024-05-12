import * as S from './styles'
import { Eye, EyeSlash } from "@phosphor-icons/react"

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import HeaderLogin from '../../components/HeaderLogin'
import { maskCPF, maskDate, maskPhone } from '../../../../utils/mask/insputMask'
import { Link } from 'react-router-dom'

type PasswordType = 'password' | 'text'

const loginFormValidationSchema = zod.object({
    username: zod.string().nonempty("Digite seu nome")
        .transform(username => {return username.trim().split(' ').map(word => { 
            return word[0].toLocaleUpperCase().concat(word.substring(1))}).join(' ')}),
            // regex(/^[A-Za-z]+$/i, "Somente letras são permitidas"),
    email: zod.string().email('Digite um e-mail válido'),
    number: zod.string().nonempty('Informe o Número'),
    nasc: zod.string().nonempty('Informe a Data'),
    cpf: zod.string().nonempty('Informe o CPF'),
    password: zod.string().nonempty('Digite a sua senha'),
    confirm_password: zod.string().nonempty("Confirme a senha"),
})
.refine(({ confirm_password}) => confirm_password, {
    message: "A senha não corresponde",
    path: ["confirm_password"]
})

type NewLoginFormData = zod.infer<typeof loginFormValidationSchema>

const Cadastrar = () => {
    const [
        inputPasswordType,
        setInputPasswordType
    ] = useState<PasswordType>('password')

    const handleTogglePasswordType = ( type:PasswordType ) => {
        switch ( type ) {
        case 'password':
            setInputPasswordType('text')
            return
        case 'text':
        default:
            setInputPasswordType('password')
            return
        }
    }

    const loginForm = useForm<NewLoginFormData>({
        resolver: zodResolver(loginFormValidationSchema)
    })

    const { register, handleSubmit, formState, reset } = loginForm

    const { errors } = formState

    const handleLoginSubmit = (data: NewLoginFormData, ) => {
        console.log(data)
        reset()
    }

    return (
        <>
        <HeaderLogin />
            <S.Cadastro>
                <S.MainCadastro>
                        <S.HeaderCadastro>
                            <h1>Cadastrar</h1>
                        </S.HeaderCadastro>

                        <form onSubmit={handleSubmit(handleLoginSubmit)}>
                            <S.FormCadastro>
                                <label htmlFor="name">Nome Completo</label>
                                <input
                                    type="name"
                                    id="name"
                                    {...register('username', { required: true })}
                                />
                                    { errors.username  && (
                                    <span > {errors.username?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="cpf">CPF</label>
                                <input
                                    type="tel"
                                    id="name"
                                    {...register('cpf', { required: true })}
                                    onChange={(event) => {
                                        const {value} = event.target
                                        event.target.value = maskCPF(value)
                                    }}
                                />
                                    { errors.cpf  && (
                                    <span > {errors.cpf?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="number">Número de Telefone</label>
                                <input
                                    type="tel"
                                    id="name"
                                    {...register('number', { required: true })}
                                    onChange={(event) => {
                                        const {value} = event.target
                                        event.target.value = maskPhone(value)
                                    }}
                                />
                                    { errors.number  && (
                                    <span > {errors.number?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="nasc">Data de Nascimento</label>
                                <input
                                    type="tel"
                                    id="name"
                                    {...register('nasc', { required: true })}
                                    onChange={(event) => {
                                        const {value} = event.target
                                        event.target.value = maskDate(value)
                                    }}
                                />
                                    { errors.nasc  && (
                                    <span > {errors.nasc?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="email">E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                />
                                    { errors.email  && (
                                    <span > {errors.email?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="email">Digite novamente o E-mail</label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register('email')}
                                />
                                    { errors.email  && (
                                    <span > {errors.email?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="password">Senha</label>
                                <input
                                    id="password"
                                    type={inputPasswordType}
                                    {...register('password')}
                                />
                                <button
                                    type='button'
                                    onClick={() => handleTogglePasswordType(inputPasswordType)}
                                >
                                    { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                                </button>
                                    { errors.password  && (
                                    <span className="text-red text-sm"> {errors.password?.message} </span>)
                                    }
                            </S.FormCadastro>
                            <S.FormCadastro>
                                <label htmlFor="password">Digite novamente a senha</label>
                                <input
                                    id="password"
                                    type={inputPasswordType}
                                    {...register('confirm_password')}
                                />
                                <button
                                    type='button'
                                    onClick={() => handleTogglePasswordType(inputPasswordType)}
                                >
                                    { inputPasswordType === 'password' ? <EyeSlash /> : <Eye /> }
                                </button>
                                    { errors.password  && (
                                    <span className="text-red text-sm"> {errors.password?.message} </span>)
                                    }
                            </S.FormCadastro>

                            <S.FooterCadastro>
                                <button type="submit" onSubmit={handleSubmit(handleLoginSubmit)}>
                                    Cadastrar
                                </button>
                            </S.FooterCadastro>

                            <S.Acessar>
                                <span>Já tem uma conta? 
                                    <Link to="/login">
                                        <a>Acessar</a>
                                    </Link>
                                </span>
                            </S.Acessar>
                        </form>
                </S.MainCadastro>
            </S.Cadastro>
        </>
    )
}

export default Cadastrar
